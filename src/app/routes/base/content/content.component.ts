import {Component} from '@angular/core';
import {AboutContentComponent} from "./about-content/about-content.component";
import {CommentContentComponent} from "./comment-content/comment-content.component";
import {RelatedContentComponent} from "./related-content/related-content.component";
import {ActivatedRoute} from "@angular/router";

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
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
    });
  }
}
