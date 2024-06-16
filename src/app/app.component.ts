import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsersModule } from './users/users.module';
import { routes } from './app.routes';
import { HeaderRoutType } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, UsersModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'users-dashboard';

  showWelcomeMessage: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Визначаємо, чи є активний маршрут головним
        this.showWelcomeMessage = this.router.url === '/';
      }
    });
  }

  headerLinks: Array<HeaderRoutType> = [
    {
      path: 'users',
      title: 'Users List',
    },
    {
      path: "users/form/create",
      title: "Register a user"
    },
  ];
}
