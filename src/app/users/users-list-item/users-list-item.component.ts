import { Component, Input } from '@angular/core';

import { UsersService } from '../users.service';
import { UserType } from '../users.types';


@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrl: './users-list-item.component.scss',
})
export class UsersListItemComponent {
  constructor(public usersService: UsersService) {}

  @Input() user: UserType | undefined;
  @Input() name: string = '';
}
