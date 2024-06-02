import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";
import { UserType } from "../users.types";

@Component({
    selector: "app-user-profile",
    templateUrl: "./user-profile.component.html",
    styleUrl: "./user-profile.component.scss",
})
export class UserProfileComponent implements OnInit {
    userId: string | undefined;
    user: UserType | undefined;;

    constructor(public usersService: UsersService) {}

    ngOnInit() {
        this.userId = window.location.pathname.split("/").at(-1);
        if (this.userId) {
            this.user = this.generateUserCard(this.userId);
        }
    }

    generateUserCard(userId: string): UserType | undefined {
      return this.usersService.users.find(user => user.id === userId);
    }
}
