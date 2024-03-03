import {Component} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {CardComponent} from "../../../shared/component/card/card.component";
import {Card} from "../../../shared/interface/card.interface";
import {rout} from "../../../shared/model/routing.model";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    DividerModule,
    CardComponent,
    ButtonModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  cards: Card[] = [
    {
      isShow: true,
      router: rout.Main,
      img:'../assets/img/JavaScript-Tutorial.svg',
       description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit? Adipisci autem debitis deserunt dicta error exercitationem, quasi suscipit?\n'
    }, {
       isShow: true,
      img:'../assets/img/typescript.svg',
      router: rout.Main,
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit? Adipisci autem debitis deserunt dicta error exercitationem, quasi suscipit?\n'
    }, {
       isShow: true,
      img:'../assets/img/Angular_Logo_SVG.svg',
      router: rout.Main,
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit? Adipisci autem debitis deserunt dicta error exercitationem, quasi suscipit?\n'
    }
  ];
}
