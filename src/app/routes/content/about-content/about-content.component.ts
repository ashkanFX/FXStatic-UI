import {Component} from '@angular/core';
import {ImgModel} from "../../../shared/model/img.model";
import {ImgIconEnum} from "../../../shared/enums/imgIcon.enum";
import {ButtonModule} from "primeng/button";

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
