import { Injectable } from '@angular/core';
import { UserType } from './users.types';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {
    this.users = this.generateUser();
  }

  users: Array<UserType> = [];
  user: UserType | undefined;

  // other functions
  generateUser(): Array<UserType> {
    const users = new Array(15).fill(0);

    return users.map((element, index) => {
      return {
        id: faker.database.mongodbObjectId(),
        fullname: faker.person.fullName(),
        email: faker.internet.email(),
        salary: faker.number.int({ min: 500, max: 6000 }),
        job: faker.person.jobTitle(),
        image: faker.image.avatar(),
        bio: faker.person.bio(),
        skills: faker.helpers.arrayElements([
          'js',
          'ts',
          'html',
          'css',
          'angular',
          'react',
        ]),
      };
    });
  }

  addUser(user: UserType) {
    this.users.push(user);
  }

  deleteUser(userEmail: string) {
    return (this.users = this.users.filter((user) => user.email !== userEmail));
  }

  generateUserCard(userId: string): UserType | undefined {
    return this.users.find((user) => user.id === userId);
  }

  generaeUserFormEdit(userId: string) {
    return this.users.find((user) => user.id === userId);
  }

  editProfile(us: UserType) {
    return this.users.map((user) => {
      if (user.id === us.id) {
        us.email === "" ? user.email : user.email = us.email;
        user.image = us.image;
        us.fullname === "" ? user.fullname : user.fullname = us.fullname;
        us.job === "" ? user.job : user.job = us.job;
        us.salary === 0 ? user.salary : user.salary = us.salary;
        us.skills.length === 0 ? user.skills : user.skills = us.skills;
        us.bio === "" ? user.bio : user.bio = us.bio;
      }

      return user;
    });
  }
}
