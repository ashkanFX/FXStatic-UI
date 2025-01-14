import {Component, OnInit} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {NgForOf} from "@angular/common";
import {CardComponent} from "../../../../core/card/card.component";
import {Card} from "../../../../shared/interface/card.interface";
import {ShareService} from "../../../../shared/structure/share/share.service";
import {CategoryService} from "../../../admin/category/category.service";
import {Category} from "../../../admin/category/Category";

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

  categoryList: Category[]
  cards: Card[]

  ngOnInit(): void {
    this.category.getAllCategory().subscribe(res => {
      this.categoryList = res;
    })


  }

  addCategory(event: string) {
    // this.share._category.next(event)
  }
}
