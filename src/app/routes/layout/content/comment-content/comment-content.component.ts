import {Component} from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-comment-content',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './comment-content.component.html',
  styleUrl: './comment-content.component.css'
})
export class CommentContentComponent {

}
