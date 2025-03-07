import {Component, OnInit} from '@angular/core';
import {Card} from "../../../shared/interface/card.interface";
import {CardComponent} from "../../../core/card/card.component";
import {SliderComponent} from "../../../core/slider/slider.component";
import {TypeEffectComponent} from "../../../core/type-effect/type-effect.component";
import {TypeEffectService} from "../../../core/type-effect/type-effect.service";
import {ReactiveFormsModule} from "@angular/forms";
import {FileUploadModule} from "primeng/fileupload";
import {ChapterComponent} from "./chapter/chapter.component";
import {LastActivityComponent} from "./last-activity/last-activity.component";
import {CategoryComponent} from "./category/category.component";
import {PostService} from "../../admin/post/post.service";
import {AsyncPipe, JsonPipe, NgFor} from "@angular/common";
import {Subject} from "rxjs";
import {rout} from "../../../shared/model/routing.model";
import {DividerModule} from "primeng/divider";
import {PanelModule} from "primeng/panel";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    CategoryComponent,
    LastActivityComponent,
    ChapterComponent,
    SliderComponent,
    NgFor,
    TypeEffectComponent,
    ReactiveFormsModule,
    FileUploadModule,
    JsonPipe,
    AsyncPipe,
    DividerModule,
    PanelModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private readonly typeEffectService: TypeEffectService, private readonly postService: PostService) {
  }

  cards: Subject<Card[]> = new Subject();

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

