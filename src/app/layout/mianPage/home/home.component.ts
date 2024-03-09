import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../../shared/component/card/card.component";
import {Card} from "../../../shared/interface/card.interface";
import {rout} from "../../../shared/model/routing.model";
import {CategoryComponent} from "../category/category.component";
import {LastActivityComponent} from "../last-activity/last-activity.component";
import {ChapterComponent} from "../chapter/chapter.component";
import {NavBarComponent} from "../../../shared/component/nav-bar/nav-bar.component";
import {SliderComponent} from "../../../shared/component/slider/slider.component";
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    CategoryComponent,
    LastActivityComponent,
    ChapterComponent,
    NavBarComponent,
    SliderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    var typed = new Typed('#element', {
      strings: ['welcome', 'This is dock dock' ,'that help you to understand about ' ,"everything new"],
      startDelay: 1000,
      typeSpeed: 50,
      backSpeed: 30,
      fadeOut:true,
      showCursor:true,
      cursorChar:"!",
      loop:true,
      smartBackspace: false, // Default value
    });
  }

  constructor() {

  }

  cards: Card[] = [
    {
      text: 'test',
      isShow: true,
      router: rout.Main,
      subText: 'testSubtext',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit?  exercitationem, quasi suscipit?\n'
    }, {
      text: 'test',
      isShow: true,
      router: rout.Main,
      subText: 'testSubtext',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit?  exercitationem, quasi suscipit?\n'
    }
  ];

}
