import {Component, Input} from '@angular/core';
import {MainPageInterface} from "../../../shared/interface/mainPage.interface";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  @Input() config :MainPageInterface
  default: string = 'bg-1-color';
}
