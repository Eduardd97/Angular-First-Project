import { Component, OnInit } from "@angular/core";
import { fa, faker, ne, th } from "@faker-js/faker";
import { UserType } from "../users.types";
import { UsersService } from "../users.service";

@Component({
    selector: "app-users-list",
    templateUrl: "./users-list.component.html",
    styleUrl: "./users-list.component.scss",
})
export class UsersListComponent {
    constructor(public usersService: UsersService) {}
}
