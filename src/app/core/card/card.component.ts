import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {Router, RouterLink} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
import {Card} from "../../shared/interface/card.interface";
import {AvatarModule} from "primeng/avatar";
import {ChipModule} from "primeng/chip";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardModule,
    RouterLink,
    CommonModule,
    NgIf,
    AvatarModule,
    ChipModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements AfterViewInit {
  @ViewChild('context') context: ElementRef
  @Input() config: Card
  imageBlobUrl: string | ArrayBuffer | null;

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    this.context.nativeElement.innerHTML = this.config.context;

  }

  blobUrl: string | null = null;

  ngOnInit() {
    if (this.config.img) {
      let blob = new Blob([], {type: 'image/png'}); // Example blob
      this.blobUrl = `data:image/png;base64,${this.config.img}`;
     }
  }

  ngOnDestroy() {
    // Revoke the object URL to free memory
    if (this.blobUrl) {
      URL.revokeObjectURL(this.blobUrl);
    }
  }

  redirect(url: string, id ?: string) {
    this.router.navigate([url, id]);
  }

}
