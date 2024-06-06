import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsersModule } from './users/users.module';
import { routes } from './app.routes';
import { HeaderRoutType } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'users-dashboard';

  headerLinks: Array<HeaderRoutType> = [
    {
      path: 'users',
      title: 'Users List',
    },
    {
      path: "users/form/create",
      title: "Register a user"
    }
  ];
}
