import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

import { UsersService } from './users.service';

import { UsersListItemComponent } from './users-list-item/users-list-item.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditComponent } from './edit/edit.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersListItemComponent,
    UserProfileComponent,
    UserFormComponent,
    EditComponent
  ],
  exports: [UsersListComponent, UserProfileComponent, UserFormComponent, EditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [UsersService, Router],
})
export class UsersModule {}