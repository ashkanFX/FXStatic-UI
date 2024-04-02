import {Component} from '@angular/core';
import {AboutContentComponent} from "./about-content/about-content.component";
import {CommentContentComponent} from "./comment-content/comment-content.component";
import {RelatedContentComponent} from "./related-content/related-content.component";

@Component({
  selector: 'app-content',
  standalone: true,
    imports: [
        AboutContentComponent,
        CommentContentComponent,
        RelatedContentComponent
    ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
