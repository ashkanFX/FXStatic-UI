import {Component} from '@angular/core';

import {ButtonModule} from "primeng/button";
import {ImgIconEnum} from "../../../../shared/enums/imgIcon.enum";
import {ImgModel} from "../../../../shared/model/img.model";

@Component({
  selector: 'app-about-content',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './about-content.component.html',
  styleUrl: './about-content.component.css'
})
export class AboutContentComponent {
  img = new ImgModel(ImgIconEnum.javascript, 20, 20, "test")

}
