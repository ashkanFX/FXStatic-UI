import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";

import {severity, Toast} from "../../../../shared/model/Toast";
import {ShareService} from "../../../../shared/structure/share/share.service";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../../admin/comment/comment.service";
import {CommentReqDto} from "../../../admin/comment/comment.req.dto";

@Component({
  selector: 'app-comment-content',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    InputTextareaModule
  ],
  templateUrl: './comment-content.component.html',
  styleUrl: './comment-content.component.css'
})
export class CommentContentComponent implements OnInit {
  commentControl = new FormControl('', [Validators.required, Validators.maxLength(500)]);
  commentForm: FormGroup;
  postId: string;

  constructor(private service: CommentService, private share: ShareService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.prepareData()

  }

  prepareData() {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      this.service.activeComment(Number(this.postId)).subscribe(res => {
        console.log(res);
      })
    });
    this.commentForm = this.share.FormBuilderService.group({
      comment: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  submit() {
    if (this.commentControl.valid) {
      const commentText = this.commentControl.value;
      const commentReqDto = new CommentReqDto()
      commentReqDto.comment = commentText
      commentReqDto.postId = Number(this.postId)
      this.service.addComment(commentReqDto).subscribe(res => {
        this.share.toast.next(new Toast(severity.success, 'success', 'comment is send'));
      })
      this.commentControl.reset();
    }
  }

}
