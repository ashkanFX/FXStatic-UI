import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  slides = [1 ]


  nextSlide() {
    this.slides.shift()
    this.slides.push(2)
  }

  priviesSlide() {
    this.slides.pop()
    this.slides.push(1)
  }

}
