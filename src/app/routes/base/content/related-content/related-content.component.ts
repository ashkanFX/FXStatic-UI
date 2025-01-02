import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../admin/post/post.service";

@Component({
  selector: 'app-related-content',
  standalone: true,
  imports: [],
  templateUrl: './related-content.component.html',
  styleUrl: './related-content.component.css'
})
export class RelatedContentComponent implements OnInit {
  postId: string | null
  @ViewChild('context') context: ElementRef

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
    });
  }


  ngOnInit(): void {
    this.postService.getById(this.postId).subscribe(res => {
      this.context.nativeElement.innerHTML = res.description;
    })
  }
}
