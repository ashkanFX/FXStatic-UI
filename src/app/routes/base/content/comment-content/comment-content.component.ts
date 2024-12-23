import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../admin/post/post.service";

@Component({
  selector: 'app-comment-content',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './comment-content.component.html',
  styleUrl: './comment-content.component.css'
})
export class CommentContentComponent{

}
