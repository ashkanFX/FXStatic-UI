import {Component, OnInit} from '@angular/core';
import {MainPageComponent} from "../../core/pageConfig/main-page/main-page.component";
import {NavBarComponent} from "../../core/nav-bar/nav-bar.component";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {NgClass} from "@angular/common";
import {rout} from "../../shared/model/routing.model";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MainPageComponent,
    NavBarComponent,
    RouterOutlet,
    SidebarModule,
    ButtonModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  rout = rout;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
   }


}
