import {Component, inject, OnInit} from '@angular/core';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {DividerModule} from 'primeng/divider';
import {PrimeIcons} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {rout} from '../../shared/model/routing.model';
import {ButtonIcon} from '../../shared/enums/public.enum';
import {navBar} from '../../shared/interface/nav.interface';
import {NavBarComponent} from '../../core/nav-bar/nav-bar.component';
import {FooterComponent} from '../../core/footer/footer.component';
import {MainPageComponent} from '../../core/pageConfig/main-page/main-page.component';
import {JsonPipe} from '@angular/common';
import {footer} from '../../shared/interface/footer.interface';
import {ToastModule} from 'primeng/toast';
import {SessionService} from '../../shared/structure/session/session.service';
import {ShareService} from '../../shared/structure/share/share.service';
import {severity, Toast} from '../../shared/model/Toast';
import {ReplaySubject} from 'rxjs';

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
    MainPageComponent,
    ToastModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  private readonly session = inject(SessionService);
  private readonly shared = inject(ShareService);

  navBarConf: navBar = {
    textColor: 'text-2-color',
    upDateNavBar: new ReplaySubject<navBar>(),
    rightButton: [],
    leftButton: [
      {
        text: 'admin',
        icon: PrimeIcons.TAG,
        iconStatus: ButtonIcon.right,
        show: this.shared.UserAuthService.checkIsAdmin(JSON.parse(this.session.getItemInSessionStorage('roles'))) && this.session.getItemInSessionStorage('jwtToken'),
        router: rout.User,
        clicked: () => {
        }
      },
      {
        text: 'Home',
        icon: PrimeIcons.HOME,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Main,
        clicked: () => {
        }
      },
      {
        text: 'Content',
        icon: PrimeIcons.ARROW_RIGHT,
        iconStatus: ButtonIcon.right,
        show: true,
        router: rout.Content,
        clicked: () => {
        }
      },
      {
        text: 'Log in',
        icon: PrimeIcons.LOCK,
        iconStatus: ButtonIcon.right,
        show: !this.session.getItemInSessionStorage('jwtToken'),
        router: rout.Login,
        clicked: () => {
        }
      },
      {
        text: 'Log out',
        icon: PrimeIcons.LOCK_OPEN,
        iconStatus: ButtonIcon.right,
        show: this.session.getItemInSessionStorage('jwtToken'),
        router: rout.Home,
        clicked: () => {
          this.session.clearAllItemInSessionStorage();
          if (this.navBarConf.leftButton) {
            this.navBarConf.leftButton[3].show = !this.session.getItemInSessionStorage('jwtToken');
            this.navBarConf.leftButton = [
              this.navBarConf.leftButton[1],
              this.navBarConf.leftButton[2],
              this.navBarConf.leftButton[3]
            ];
          }
          this.navBarConf.upDateNavBar.next(this.navBarConf);
          this.shared.toast.next(new Toast(severity.Error, 'Warning', 'your are log out'));
        }
      }
    ]
  };

  footerConfiguration: footer = {
    text: 'Made by Ashkan',
    textColor: 'text-2-color',
    bgColor: 'bg-2-color'
  };

  ngOnInit(): void {

  }
}
