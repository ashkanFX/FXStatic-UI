import {Component, OnInit} from '@angular/core';
import {TieredMenuModule} from "primeng/tieredmenu";
import {DividerModule} from "primeng/divider";
import {PrimeIcons} from "primeng/api";
import {CardModule} from "primeng/card";
import {footer} from "../../../shared/interface/footer.interface";
import {navBar} from "../../../shared/interface/nav.interface";
import {ButtonIcon} from "../../../shared/enums/public.enum";
import {rout} from "../../../shared/model/routing.model";
import {JsonPipe} from "@angular/common";
import {NavBarComponent} from "../../../core/nav-bar/nav-bar.component";
import {FooterComponent} from "../../../core/footer/footer.component";
import {MainPageComponent} from "../../../core/pageConfig/main-page/main-page.component";

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
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

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
        show: Boolean(JSON.parse(sessionStorage.getItem('userdetails')!)),
        router: rout.admin,
        clicked($even) {
          console.log('test')
        }
      },
      {
        text: "Home",
        icon: PrimeIcons.HOME,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Main,
        clicked($even) {
          console.log('test')
        }
      }, {
        text: "Content",
        icon: PrimeIcons.ARROW_RIGHT,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Content,
        clicked($even) {
          console.log('test')
        }
      },
      {
        text: "Log in",
        icon: PrimeIcons.LOCK,
        iconStatus: ButtonIcon.right,
        show: !Boolean(JSON.parse(sessionStorage.getItem('userdetails')!)),
        router: rout.Login,
        clicked($even) {
          console.log('test')
        }
      },
      {
        text: "Log out",
        icon: PrimeIcons.LOCK_OPEN,
        iconStatus: ButtonIcon.right,
        show: Boolean(JSON.parse(sessionStorage.getItem('userdetails')!)),
        router: rout.Home,
        clicked($even) {
          sessionStorage.clear()
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
