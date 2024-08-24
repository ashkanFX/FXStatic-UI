import {Component, OnInit} from '@angular/core';

import {PrimeIcons} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MainPageComponent} from "../../../core/pageConfig/main-page/main-page.component";
import {NavBarComponent} from "../../../core/nav-bar/nav-bar.component";
import {LoginService} from "./service/login.service";
import {rout} from "../../../shared/model/routing.model";
import {ButtonIcon} from "../../../shared/enums/public.enum";
import {MainPageInterface} from "../../../shared/interface/mainPage.interface";
import {navBar} from "../../../shared/interface/nav.interface";
import {LoginResDto} from "./service/login.res.dto";
import {FooterComponent} from "../../../core/footer/footer.component";
import {CommonModule} from "@angular/common";
import {SessionService} from "../../../shared/structure/session/session.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MainPageComponent,
    ReactiveFormsModule,
    NavBarComponent,
    ButtonModule, CommonModule,
    FooterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private service: LoginService,
              private router: Router,
              private session: SessionService) {
  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
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
    const loginResDto = new LoginResDto(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
    this.service.login(loginResDto).subscribe((res) => {
      this.session.setEachKeyOfObject(res)
      this.router.navigate(['/main']);
    })
  }

  register() {
    this.service.register().subscribe(() => {


    })
  }
}
