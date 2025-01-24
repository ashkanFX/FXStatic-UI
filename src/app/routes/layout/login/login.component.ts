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
import {FooterComponent} from "../../../core/footer/footer.component";
import {CommonModule} from "@angular/common";
import {SessionService} from "../../../shared/structure/session/session.service";
import {RippleModule} from "primeng/ripple";
import {ShareService} from "../../../shared/structure/share/share.service";
import {severity, Toast} from "../../../shared/model/Toast";
import {SingInReqDto, singUpReqDto} from "./login.req.dto";
import {SingUpResDto, SinIinResDto} from "./login.res.dto";
import {ReplaySubject} from "rxjs";

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
    upDateNavBar: new ReplaySubject<navBar>(),
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
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  buildFormGroupLogin() {
    this.loginForm = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  onSubmitLogin() {
    const singInReqDto = new SingInReqDto(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
    this.service.singIn(singInReqDto).subscribe({
      next: (res: SinIinResDto) => {
        this.session.setEachKeyOfObject(res);
        this.share.toast.next(new Toast(severity.success, 'Success', 'your are login'));
        this.router.navigate(['/main']);
      },
      error: (err) => {
        this.share.toast.next(new Toast(severity.Error, '', err.error.message))
      }
    })
  }

  onSubmitRegister() {
    const singUpReq = new singUpReqDto(
      this.registerForm.get('email')?.value,
      this.registerForm.get('username')?.value,
      this.registerForm.get('password')?.value)
    this.service.singUp(singUpReq).subscribe({
      next: (res: SingUpResDto) => {
        this.share.toast.next(new Toast(severity.success, 'success', res.massage))
        this.router.navigate(['/main']);
      }, error: (err) => {
        this.share.toast.next(new Toast(severity.Error, '', err.error.message))
      }
    })
  }

  changeForm(formType: string) {
    this.formType = formType
  }
}
