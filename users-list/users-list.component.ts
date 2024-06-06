import { Component } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
    selector: "app-users-list",
    templateUrl: "./users-list.component.html",
    styleUrl: "./users-list.component.scss",
})
export class UsersListComponent {
    constructor(public usersService: UsersService) {}
}
