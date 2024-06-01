import { Component, Input } from '@angular/core';
import { UserType } from '../users.types';

@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrl: './users-list-item.component.scss',
})
export class UsersListItemComponent {
  @Input() user: UserType | undefined;
}
