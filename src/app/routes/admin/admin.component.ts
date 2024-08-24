import {Component, OnInit} from '@angular/core';
import {MainPageComponent} from "../../core/pageConfig/main-page/main-page.component";
import {MainPageInterface} from "../../shared/interface/mainPage.interface";
import {NavBarComponent} from "../../core/nav-bar/nav-bar.component";
import {navBar} from "../../shared/interface/nav.interface";
import {rout} from "../../shared/model/routing.model";
import {PrimeIcons} from "primeng/api";
import {ButtonIcon} from "../../shared/enums/public.enum";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MainPageComponent,
    NavBarComponent,
    RouterOutlet
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  configMainPage: MainPageInterface = {
    bgColor: "bg-3-color "
  }
  mainColor: string = 'text-blue-600'

  navBarConf: navBar = {
    textColor: this.mainColor,
    rightButton: [],
    leftButton: [
      {
        text: "post",
        icon: PrimeIcons.CART_PLUS,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Post ,
        clicked($even) {}
      },
      {
        text: "profile",
        icon: PrimeIcons.ID_CARD,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.admin,
        clicked($even) {
        }
      },
      {
        text: "category",
        icon: PrimeIcons.EJECT,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Category,
        clicked($even) {
        }
      }
    ]
  };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
   }


}
