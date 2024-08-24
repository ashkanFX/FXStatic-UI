import {Component, OnInit} from '@angular/core';

import {PrimeIcons} from "primeng/api";
    import {ButtonModule} from "primeng/button";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
 import {getCookie} from "typescript-cookie"
import {Router} from "@angular/router";
import {MainPageComponent} from "../../../core/pageConfig/main-page/main-page.component";
import {NavBarComponent} from "../../../core/nav-bar/nav-bar.component";
import {LoginService} from "./service/login.service";
import {ShareService} from "../../../shared/structure/share.service";
import {rout} from "../../../shared/model/routing.model";
import {ButtonIcon} from "../../../shared/enums/public.enum";
import {MainPageInterface} from "../../../shared/interface/mainPage.interface";
import {navBar} from "../../../shared/interface/nav.interface";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MainPageComponent,
    ReactiveFormsModule,
    NavBarComponent,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: LoginService, private router: Router, private share: ShareService) {
  }
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  configMainPage: MainPageInterface = {
    bgColor: "bg-1-color "
  }
  mainColor: string = 'text-blue-600'
  navBarConf: navBar = {
    textColor: this.mainColor,
    rightButton: [],
    leftButton: [
      {
        text: "Home",
        icon: PrimeIcons.ARROW_LEFT,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Home,
        clicked() {}
      }
    ]
  };

  onSubmit() {
    window.sessionStorage.setItem("userdetails", JSON.stringify(this.loginForm.getRawValue()));
    this.service.login().subscribe((res) => {
      let xsrf = getCookie("XSRF-TOKEN")
      window.sessionStorage.setItem("X-XSRF-TOKEN", JSON.stringify(xsrf));
      window.sessionStorage.setItem("user", JSON.stringify(res));
      this.share.SetUserDetail = res.body;
      window.sessionStorage.setItem("Login", String(true));
      this.router.navigate(['/main']);
    })
  }

  register() {
    this.service.register().subscribe(() => {


    })
  }
}
