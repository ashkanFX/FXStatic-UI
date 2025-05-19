import {Component} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FormControl, Validators} from "@angular/forms";

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
  commentControl = new FormControl('', [Validators.required, Validators.maxLength(500)]);

  submitComment(): void {
    if (this.commentControl.valid) {
      const commentText = this.commentControl.value;
      console.log('Comment submitted:', commentText);
      this.commentControl.reset();
    }
  }
}
