import {Component, Input} from '@angular/core';
import { CardModule} from "primeng/card";
import {RouterLink} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
import {Card} from "../../shared/interface/card.interface";
import {AvatarModule} from "primeng/avatar";

@Component({
  selector: 'app-card',
  standalone: true,
    imports: [
        CardModule,
        RouterLink,
        CommonModule,
        NgIf,
        AvatarModule
    ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor() {
  }

  @Input() config: Card
}
