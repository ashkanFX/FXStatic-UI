import {Component, OnInit} from '@angular/core';
import {Card} from "../../../shared/interface/card.interface";
import {rout} from "../../../shared/model/routing.model";
import {CardComponent} from "../../../core/card/card.component";
import {SliderComponent} from "../../../core/slider/slider.component";
import {TypeEffectComponent} from "../../../core/type-effect/type-effect.component";
import {TypeEffectService} from "../../../core/type-effect/type-effect.service";
import {ReactiveFormsModule} from "@angular/forms";
import {FileUploadModule} from "primeng/fileupload";
import {PostService} from "../../admin/post/creat-post/post.service";
import {ChapterComponent} from "./chapter/chapter.component";
import {LastActivityComponent} from "./last-activity/last-activity.component";
import {CategoryComponent} from "./category/category.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    CategoryComponent,
    LastActivityComponent,
    ChapterComponent,
     SliderComponent,
    TypeEffectComponent,
    ReactiveFormsModule,
    FileUploadModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private readonly typeEffectService: TypeEffectService, private postService: PostService) {
  }

  ngOnInit(): void {
     this.typeEffectService.state.next({
      strings: ['welcome', 'This is FX ', 'that help you to understand about ', "everything new"],
       startDelay: 1000,
       typeSpeed: 50,
       backSpeed: 30,
       fadeOut: true,
       showCursor: true,
       cursorChar: "!",
       loop: true,
       smartBackspace: false
     })
    this.typeEffectService.state.complete()
    this.prepareCard()
  }


  cards: Card[] = [
    {
      text: 'test',
      isShow: true,
      haveProfile : true,
      router: rout.Main,
      subText: 'testSubtext',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non' +
        '      odit perferendis quas quos sit?  exercitationem, quasi suscipit?'
    }, {
      text: 'test',
      haveProfile : true,
      isShow: true,
      router: rout.Main,
      subText: 'testSubtext',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non' +
        '      odit perferendis quas quos sit?  exercitationem, quasi suscipit?'
    }
  ];
  prepareCard(){
    this.postService.getLatestPost().subscribe(res => {
    })

  }

}

