import {Component, OnInit} from '@angular/core';
import {MainPageComponent} from "../../core/pageConfig/main-page/main-page.component";
import {NavBarComponent} from "../../core/nav-bar/nav-bar.component";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {AsyncPipe, NgClass} from "@angular/common";
import {rout} from "../../shared/model/routing.model";
import {UserService} from "./user/user.service";
import {CurrentUserResDto} from "./user/user.res.dto";

@Component({
  selector: 'app-admin',
  standalone: true,
    imports: [
        MainPageComponent,
        NavBarComponent,
        RouterOutlet,
        SidebarModule,
        ButtonModule,
        NgClass,
        RouterLink,
        AsyncPipe
    ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  rout = rout;
  currentUser: CurrentUserResDto

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUSer().subscribe(res => {
      this.currentUser = res;
    })
  }


}
