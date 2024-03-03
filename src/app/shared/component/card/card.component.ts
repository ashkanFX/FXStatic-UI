import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {Card} from "../../interface/card.interface";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor() {
  }

  @Input() config: Card
}
