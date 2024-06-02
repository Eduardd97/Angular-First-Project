import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersListItemComponent } from "./users-list-item/users-list-item.component";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UsersService } from "./users.service";

@NgModule({
    declarations: [
        UsersListComponent,
        UsersListItemComponent,
        UserProfileComponent,
    ],
    exports: [UsersListComponent, UserProfileComponent],
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
    providers: [UsersService],
})
export class UsersModule {}
