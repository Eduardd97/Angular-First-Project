import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { UserType } from '../users.types';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  constructor(public usersService: UsersService) {}

  skills: Array<string> = ['JS', 'HTML', 'CSS', 'React', 'Angular', 'TS'];

  defaultEmails: Array<string> = [
    'email@1gmail.com',
    'email@2gmail.com',
    'email@3gmail.com',
  ];

  setEmailFromDefault(email: string) {
    this.userData.email.setValue(email);
  }

  userData = {
    id: faker.database.mongodbObjectId(),
    image: faker.image.avatar(),
    email: new FormControl(''),
    bio: new FormControl(''),
    fullname: new FormControl(''),
    job: new FormControl(''),
    salary: new FormControl(0),
    skills: new FormControl<string[]>([]),
  };

  addSkillToUser(skill: string) {
    // if (this.userData.skills.value) {
    //   this.userData.skills.value.push(skill);
    // }

    // this.userData.skills.value?.push(skill);
    const skills = this.userData.skills.value
      ? [...this.userData.skills.value, skill]
      : [];

    this.userData.skills.setValue(skills);
  }

  removeUserSkill(skill: string) {
    const newSkills = this.userData.skills.value?.filter((sk) => sk !== skill);

    newSkills && this.userData.skills.setValue(newSkills);
  }

  onSubmit() {
    const { id, image, skills } = this.userData;

    const user: UserType = {
      id,
      image,
      skills: this.userData.skills.value || [],
      email: this.userData.email.value || '',
      bio: this.userData.bio.value || '',
      fullname: this.userData.fullname.value || '',
      salary: this.userData.salary.value || 0,
      job: this.userData.job.value || '',
    };

    console.log(user, 'user from form');

    this.userData.email.setValue("");
    this.userData.bio.setValue("");
    this.userData.fullname.setValue("");
    this.userData.job.setValue("");
    this.userData.salary.setValue(0);

    this.usersService.addUser(user);
  }
}
