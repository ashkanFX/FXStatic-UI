import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {rout} from "./shared/model/routing.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})

export class AppComponent {
  constructor(private router: Router) {
    this.router.navigate([rout.Content.url]).then(r => console.log(r))

  }
}
