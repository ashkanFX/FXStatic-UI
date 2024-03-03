import {Component, OnInit} from '@angular/core';
import {NavBarComponent} from "../../../shared/component/nav-bar/nav-bar.component";
import {TieredMenuModule} from "primeng/tieredmenu";
import {DividerModule} from "primeng/divider";
import {PrimeIcons} from "primeng/api";
import {CardModule} from "primeng/card";
import {FooterComponent} from "../../../shared/component/footer/footer.component";
import {footer} from "../../../shared/interface/footer.interface";
import {navBar} from "../../../shared/interface/nav.interface";
import {ButtonIcon} from "../../../shared/enums/public.enum";
import {rout} from "../../../shared/model/routing.model";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavBarComponent,
    TieredMenuModule,
    DividerModule,
    CardModule,
    FooterComponent
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
    leftButton: [
      {
        text: "Home",
        icon: PrimeIcons.HOME,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Main,
        clicked($even) {
          console.log('test')
        }
      }  ,  {
        text: "Content",
        icon: PrimeIcons.ARROW_RIGHT,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Content,
        clicked($even) {
          console.log('test')
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
