import {Component, OnInit} from '@angular/core';
import {TieredMenuModule} from "primeng/tieredmenu";
import {DividerModule} from "primeng/divider";
import {PrimeIcons} from "primeng/api";
import {CardModule} from "primeng/card";
import {rout} from "../../shared/model/routing.model";
import {ButtonIcon} from "../../shared/enums/public.enum";
import {navBar} from "../../shared/interface/nav.interface";
import {NavBarComponent} from "../../core/nav-bar/nav-bar.component";
import {FooterComponent} from "../../core/footer/footer.component";
import {MainPageComponent} from "../../core/pageConfig/main-page/main-page.component";
import {JsonPipe} from "@angular/common";
import {footer} from "../../shared/interface/footer.interface";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavBarComponent,
    TieredMenuModule,
    DividerModule,
    CardModule,
    FooterComponent,
    JsonPipe,
    MainPageComponent
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent implements OnInit {

  ngOnInit(): void {

  }

  mainColor: string = 'text-blue-600'

  navBarConf: navBar = {
    textColor: this.mainColor,
    rightButton: [],
    leftButton: [
      {
        text: "admin",
        icon: PrimeIcons.TAG,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Post,
        clicked($even) {
        }
      },
      {
        text: "Home",
        icon: PrimeIcons.HOME,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Main,
        clicked($even) {
        }
      }, {
        text: "Content",
        icon: PrimeIcons.ARROW_RIGHT,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Content,
        clicked($even) {
        }
      },
      {
        text: "Log in",
        icon: PrimeIcons.LOCK,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Login,
        clicked($even) {
        }
      },
      {
        text: "Log out",
        icon: PrimeIcons.LOCK_OPEN,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Home,
        clicked($even) {
          window.sessionStorage.setItem("Authorization", "");
          window.sessionStorage.setItem("userdetails", "");
          window.sessionStorage.setItem("Login", String(false));
        }
      }
    ]
  };
  footerConf: footer = {
    text: "made with love by ashkan",
    icon: PrimeIcons.HEART_FILL,
    textColor: this.mainColor
  }


}
