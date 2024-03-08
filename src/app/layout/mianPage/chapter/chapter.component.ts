import { Component } from '@angular/core';
import {DividerModule} from "primeng/divider";
import {ImgModel} from "../../../shared/model/img.model";
import {ImgIconEnum} from "../../../shared/enums/imgIcon.enum";

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [
    DividerModule
  ],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {
  img = new ImgModel(ImgIconEnum.angular, 15, 15, "test")
  img2 = new ImgModel(ImgIconEnum.angular, 40, 40, "test")
  img1 = new ImgModel(ImgIconEnum.django, 15, 15, "test")

}
