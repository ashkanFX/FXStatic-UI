import {Component, OnInit} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {PostService} from "../../admin/post/creat-post/post.service";
import {CategoryService} from "../../admin/category/category.service";

@Component({
  selector: 'app-last-activity',
  standalone: true,
  imports: [
    DividerModule
  ],
  templateUrl: './last-activity.component.html',
  styleUrl: './last-activity.component.css'
})
export class LastActivityComponent{


}
