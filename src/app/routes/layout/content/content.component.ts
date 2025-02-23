import {Component, ElementRef, ViewChild} from '@angular/core';
import {CommentContentComponent} from "./comment-content/comment-content.component";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../admin/post/post.service";
import {Category} from "../../admin/category/Category";
import {NgFor, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommentContentComponent,
    TitleCasePipe,
    NgFor
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  postId: string | null
  category: Category[]
  title: Category[]
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
      this.blobUrl = res.document[0]?.content ? `data:image/png;base64,${res.document[0]?.content}` : null;
      this.countOfView = res.countOfView
    })
  }

  ngOnDestroy() {
    // Revoke the object URL to free memory
    if (this.blobUrl) {
      URL.revokeObjectURL(this.blobUrl);
    }
  }
}
