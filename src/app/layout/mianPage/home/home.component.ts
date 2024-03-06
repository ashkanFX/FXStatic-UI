import {Component} from '@angular/core';
import {CardComponent} from "../../../shared/component/card/card.component";
import {Card} from "../../../shared/interface/card.interface";
import {rout} from "../../../shared/model/routing.model";
import {CategoryComponent} from "../category/category.component";
import {LastActivityComponent} from "../last-activity/last-activity.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    CategoryComponent,
    LastActivityComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
