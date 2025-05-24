import {Component, OnInit} from '@angular/core';
import {Card} from "../../../shared/interface/card.interface";
import {CardComponent} from "../../../core/card/card.component";
import {TypeEffectComponent} from "../../../core/type-effect/type-effect.component";
import {TypeEffectService} from "../../../core/type-effect/type-effect.service";
import {ReactiveFormsModule} from "@angular/forms";
import {FileUploadModule} from "primeng/fileupload";
import {CategoryComponent} from "./category/category.component";
import {PostService} from "../../admin/post/post.service";
import {AsyncPipe, NgFor} from "@angular/common";
import {Subject} from "rxjs";
import {rout} from "../../../shared/model/routing.model";
import {DividerModule} from "primeng/divider";
import {PanelModule} from "primeng/panel";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {CommentService} from "../../admin/comment/comment.service";
import {CommentResDto} from "../../admin/comment/comment.res.dto";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    CategoryComponent,
    NgFor,
    TypeEffectComponent,
    ReactiveFormsModule,
    FileUploadModule,
    AsyncPipe,
    DividerModule,
    PanelModule,
    CarouselModule,
    TagModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private readonly typeEffectService: TypeEffectService, private readonly postService: PostService, private commentService: CommentService) {
  }

  cards: Subject<Card[]> = new Subject();
  comments: CommentResDto[];

  ngOnInit(): void {
    this.typeEffectService.state.next({
      strings: ['rxjs and angular tutorials', 'that help you to understand about ', "everything new"],
      startDelay: 1000,
      typeSpeed: 50,
      backSpeed: 30,
      fadeOut: true,
      showCursor: true,
      cursorChar: "",
      loop: true,
      smartBackspace: false
    })
    this.commentService.lastComment().subscribe(res => {
        this.comments = res
      }
    )
    this.typeEffectService.state.complete()
    this.prepareCard()
  }


  prepareCard() {
    this.postService.getLatestPost().subscribe(res => {
      res.map((item: any) => {
        item.router = rout.Content
        item.img = item?.document[item?.document.length - 1]?.content
      })
      this.cards.next(res)
    })
  }


}

