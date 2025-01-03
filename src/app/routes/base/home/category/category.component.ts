import {Component, OnInit} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {NgForOf} from "@angular/common";
import {CardComponent} from "../../../../core/card/card.component";
import {Card} from "../../../../shared/interface/card.interface";
import {rout} from "../../../../shared/model/routing.model";
import {ShareService} from "../../../../shared/structure/share/share.service";
import {CategoryService} from "../../../admin/category/category.service";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    DividerModule,
    CardComponent,
    ButtonModule,
    NgForOf
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  constructor(private share: ShareService, private category: CategoryService) {
  }

  selectedCategory = <any>[]
  cards: Card[] = [
    {
      isShow: true,
      router: rout.Main,
      haveProfile: false,
      title: 'true',
      img: '../assets/img/JavaScript-Tutorial.svg',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit? Adipisci autem debitis deserunt dicta error exercitationem, quasi suscipit?\n'
    }, {
      isShow: true,      title: 'true',

      haveProfile: false,
      img: '../assets/img/typescript.svg',
      router: rout.Main,
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit? Adipisci autem debitis deserunt dicta error exercitationem, quasi suscipit?\n'
    }, {
      isShow: true,
      haveProfile: false,
      img: '../assets/img/Angular_Logo_SVG.svg',
      title: 'true',
      router: rout.Main,
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit? Adipisci autem debitis deserunt dicta error exercitationem, quasi suscipit?\n'
    }
  ];

  ngOnInit(): void {
    // this.category.getAllCategory().subscribe(res => {
    //   console.log(res);
    // })
    // this.share._category.pipe(
    //   filter(x => !this.selectedCategory.includes(x))
    // ).subscribe(res => {
    //   this.selectedCategory.push(res)
    // })

  }

  addCategory(event: string) {
    // this.share._category.next(event)
  }
}
