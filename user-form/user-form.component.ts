import { Component } from '@angular/core';
import { UserType } from '../users.types';
import { faker } from '@faker-js/faker';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  constructor(public usersService: UsersService) { }

  userData = {
    id: faker.database.mongodbObjectId(),
    image: faker.image.avatar(),
    email: new FormControl(''),
    bio: new FormControl(''),
    fullname: new FormControl(''),
    job: new FormControl(''),
    salary: new FormControl(0),
    skills: ['JS'],
  };

  onSubmit() {
    const { id, image, skills } = this.userData;

    const user: UserType = {
      id,
      image,
      skills,
      email: this.userData.email.value || '',
      bio: this.userData.bio.value || '',
      fullname: this.userData.fullname.value || '',
      salary: this.userData.salary.value || 0,
      job: this.userData.job.value || '',
    };

    console.log(user, "user from form");

    this.usersService.addUser();
  }
}
