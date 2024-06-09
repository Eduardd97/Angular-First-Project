// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
// import { UsersService } from './users.service';
// import { ReactiveFormsModule } from '@angular/forms';
// import { UsersListComponent } from './users-list/users-list.component';
// import { UsersListItemComponent } from './users-list-item/users-list-item.component';
// import { UserFormComponent } from './user-form/user-form.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { EditComponent } from './edit/edit.component';


// @NgModule({
//   declarations: [
//     UsersListComponent,
//     UsersListItemComponent,
//     UserProfileComponent,
//     UserFormComponent,
//     EditComponent
//   ],
//   exports: [UsersListComponent, UserProfileComponent, UserFormComponent, EditComponent],
//   imports: [
//     CommonModule,
//     RouterOutlet,
//     RouterLink,
//     RouterLinkActive,
//     ReactiveFormsModule,
//   ],
//   providers: [UsersService],
// })
// export class UsersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Импортируем RouterModule

import { UsersService } from './users.service';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListItemComponent } from './users-list-item/users-list-item.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditComponent } from './edit/edit.component';

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
    RouterModule // Добавляем RouterModule в раздел imports
  ],
  providers: [UsersService],
})
export class UsersModule {}