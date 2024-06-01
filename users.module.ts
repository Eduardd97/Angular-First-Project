import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [UsersListComponent],
  exports: [UsersListComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
