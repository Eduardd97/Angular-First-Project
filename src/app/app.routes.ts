import { Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
    // children: [
    //   {
    //     path: ':user.id',
    //     component: UserProfileComponent,
    //   },
    // ],
  },
  {
    path: 'users/:user.id',
    component: UserProfileComponent,
  },
];
