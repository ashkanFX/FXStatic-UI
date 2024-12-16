import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CardModule} from "primeng/card";
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
export class CardComponent implements AfterViewInit {
  @ViewChild('context') context: ElementRef
  @Input() config: Card

  constructor() {
  }

  ngAfterViewInit() {
    // Access the native element
    console.log(this.context.nativeElement);
    this.context.nativeElement.innerHTML = this.config.description;
  }

}
