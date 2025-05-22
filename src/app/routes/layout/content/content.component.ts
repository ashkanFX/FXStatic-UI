import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommentContentComponent} from "./comment-content/comment-content.component";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../admin/post/post.service";
import {Category} from "../../admin/category/Category";
import {DatePipe, NgFor, TitleCasePipe} from "@angular/common";
import {ChipModule} from "primeng/chip";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommentContentComponent,
    TitleCasePipe,
    NgFor,
    DatePipe,
    ChipModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit , OnDestroy{

  postId: string | null
  category: Category[]
  title: Category[]
  updateAt: Date
  countOfView: number

  blobUrl: string | null = null;

  @ViewChild('context') context: ElementRef

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.postService.getById(this.postId).subscribe(res => {
      this.context.nativeElement.innerHTML = res.description;
      this.category = res.categories
      this.title = res.title
      this.updateAt = res.updateAt
      this.blobUrl = res.document[0]?.content ? `data:image/png;base64,${res.document[0]?.content}` : null;
      this.countOfView = res.countOfView
    })
  }

  ngOnDestroy() {
     if (this.blobUrl) {
      URL.revokeObjectURL(this.blobUrl);
    }
  }
}
