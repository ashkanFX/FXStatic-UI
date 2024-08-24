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
import {LoginResDto, RegisterDto} from "./service/login.res.dto";
import {FooterComponent} from "../../../core/footer/footer.component";
import {CommonModule} from "@angular/common";
import {SessionService} from "../../../shared/structure/session/session.service";
import {RippleModule} from "primeng/ripple";
import {ShareService} from "../../../shared/structure/share/share.service";
import {Toast} from "../../../shared/model/Toast";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MainPageComponent,
    ReactiveFormsModule, RippleModule,
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
              private share: ShareService,
              private session: SessionService) {
  }

  loginForm: FormGroup;
  registerForm: FormGroup;

  ngOnInit(): void {
    this.buildFormGroupRegister()
    this.buildFormGroupLogin()
  }

  formType = 'login'
  configMainPage: MainPageInterface = {
    bgColor: "bg-1-color "
  }

  navBarConf: navBar = {
    textColor: 'text-blue-600',
    rightButton: [],
    leftButton: [
      {
        text: "Home",
        icon: PrimeIcons.ARROW_LEFT,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Home,
        clicked() {
        }
      }
    ]
  };

  buildFormGroupRegister() {
    this.registerForm = this.fb.group({
      firstName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      role: new FormControl('ADMIN', [Validators.required]),
    })
  }

  buildFormGroupLogin() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  onSubmitLogin() {
    const loginResDto = new LoginResDto(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
    this.service.login(loginResDto).subscribe((res) => {
      this.session.setEachKeyOfObject(res)
      this.share.toast.next(new Toast('success', 'Success', 'your are login'));
      this.router.navigate(['/main']);
    })
  }

  onSubmitRegister() {
    const registerDto = new RegisterDto(
      this.registerForm.get('role')?.value,
      this.registerForm.get('email')?.value,
      this.registerForm.get('firstName')?.value,
      this.registerForm.get('password')?.value)
    this.service.register(registerDto).subscribe((res) => {
      this.session.setEachKeyOfObject(res)
      this.router.navigate(['/main']);
    })

  }

  changeForm(formType: string) {
    this.formType = formType
  }
}
