import {Component, Input} from '@angular/core';
import {footer} from "../../interface/footer.interface";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor() {
    this.config = null;
  }

  @Input() config: footer | null;


}
