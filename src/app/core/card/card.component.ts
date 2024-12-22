import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {Router, RouterLink} from "@angular/router";
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

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    this.context.nativeElement.innerHTML = this.config.context;
  }

  redirect(url: string, id ?: string) {
    this.router.navigate([url, id]);
  }

}
