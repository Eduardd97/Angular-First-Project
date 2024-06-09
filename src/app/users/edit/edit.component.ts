import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserType } from '../users.types';
import { FormControl } from '@angular/forms';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  userId: string | undefined;
  notSelected: boolean = false;
  
  constructor(public usersService: UsersService) {}

  skills: Array<string> = ['JS', 'HTML', 'CSS', 'React', 'Angular', 'TS'];

  userData = {
    id: new FormControl(''), // Используйте FormControl для поля 'id'
    image: faker.image.avatar(),
    email: new FormControl(''),
    bio: new FormControl(''),
    fullname: new FormControl(''),
    job: new FormControl(''),
    salary: new FormControl(0),
    skills: new FormControl<string[]>([]),
  };

  ngOnInit() {
    // Установите значение 'id' из usersService при инициализации компонента
    this.userId = window.location.pathname.split('/').at(-1);
    if(this.userId) this.userData.id.setValue(this.userId);
  }

  addSkillToUser(skill: string) {

    const skills = this.userData.skills.value
      ? [...this.userData.skills.value, skill]
      : [];

    this.userData.skills.setValue(skills);

    this.notSelected != this.notSelected
  }


  removeUserSkill(skill: string) {
    const newSkills = this.userData.skills.value?.filter((sk) => sk !== skill);

    newSkills && this.userData.skills.setValue(newSkills);
  }

  onSubmitEdit() {
    const { image, skills } = this.userData;
    const id = this.userData.id.value || ''

    const user: UserType = {
      id,  // Получите значение из FormControl для поля 'id'
      image,
      skills: skills.value || [],
      email: this.userData.email.value || '',
      bio: this.userData.bio.value || '',
      fullname: this.userData.fullname.value || '',
      salary: this.userData.salary.value || 0,
      job: this.userData.job.value || '',
    };

    console.log(user, 'user from form');

    this.userData.email.setValue('');
    this.userData.bio.setValue('');
    this.userData.fullname.setValue('');
    this.userData.job.setValue('');
    this.userData.salary.setValue(0);

    this.usersService.editProfile(user);
  }
}
