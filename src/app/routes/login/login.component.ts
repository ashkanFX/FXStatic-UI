import {Component, OnInit} from '@angular/core';
import {MainPageInterface} from "../../shared/interface/mainPage.interface";
import {navBar} from "../../shared/interface/nav.interface";
import {PrimeIcons} from "primeng/api";
import {ButtonIcon} from "../../shared/enums/public.enum";
import {rout} from "../../shared/model/routing.model";
import {MainPageComponent} from "../../core/pageConfig/main-page/main-page.component";
import {NavBarComponent} from "../../core/nav-bar/nav-bar.component";
import {ButtonModule} from "primeng/button";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "./login.service";

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
  constructor(private fb: FormBuilder, private service: LoginService) {
  }

  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.fb.group({
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
        clicked($even) {
          console.log('test')
        }
      }
    ]
  };

  login() {
    window.sessionStorage.setItem("userdetails", JSON.stringify(this.formGroup.getRawValue()));
    this.service.login().subscribe(() => {
    })
  }
}
