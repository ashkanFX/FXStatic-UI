import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {Router} from "@angular/router";
import {CommonModule, NgFor, NgIf} from "@angular/common";
import {Card} from "../../shared/interface/card.interface";
import {AvatarModule} from "primeng/avatar";
import {ChipModule} from "primeng/chip";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
    NgIf,
    NgFor,
    AvatarModule,
    ChipModule,

  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('context') context: ElementRef
  @Input() config: Card

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    this.context.nativeElement.innerHTML = this.config.context.trim().slice(0, 130).concat('...');
  }

  blobUrl: string | null = null;

  ngOnInit() {
    if (this.config.img) {
      let blob = new Blob([], {type: 'image/png'}); // Example blob
      this.blobUrl = `data:image/png;base64,${this.config.img}`;
    }
  }

  ngOnDestroy() {
    if (this.blobUrl) {
      URL.revokeObjectURL(this.blobUrl);
    }
  }

  redirect(url: string, id ?: string) {
    this.router.navigate([url, id]);
  }

}
