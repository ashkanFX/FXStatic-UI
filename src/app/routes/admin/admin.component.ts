import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {rout} from "../../shared/model/routing.model";
import {UserService} from "./user/user.service";
import {CurrentUserResDto} from "./user/user.res.dto";
import {DividerModule} from "primeng/divider";
import {severity, Toast} from "../../shared/model/Toast";
import {ShareService} from "../../shared/structure/share/share.service";
import {FooterComponent} from "../../core/footer/footer.component";
import {footer} from "../../shared/interface/footer.interface";
import {PrimeIcons} from "primeng/api";
import {Observable} from "rxjs";
import {ImgModel} from "../../shared/model/img.model";
import {ImgIconEnum} from "../../shared/enums/imgIcon.enum";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarModule,
    ButtonModule,
    RouterLink,
    DividerModule,
    FooterComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  rout = rout;
  currentUser: CurrentUserResDto
  obs=  new Observable()
  footerConf: footer = {
    text: "made with love by ashkan",
    icon: PrimeIcons.HEART_FILL,
    textColor: 'text-2-color',
    bgColor: 'text-white-alpha-40'
  }

  icon = new ImgModel(ImgIconEnum.logoBgWithe, 90, 50, "test")

  constructor(private router: Router, private userService: UserService, private shared: ShareService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUSer().subscribe(res => {
      this.currentUser = res;
    })
    this.obs.subscribe()
  }


  logOut() {
    this.shared.toast.next(new Toast(severity.Error, 'Warning', 'your are log out'));
    this.router.navigate([rout.Login.url])
  }
}
