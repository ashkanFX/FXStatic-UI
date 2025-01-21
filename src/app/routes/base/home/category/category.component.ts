import {Component, OnInit} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {NgForOf} from "@angular/common";
import {CardComponent} from "../../../../core/card/card.component";
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

  categoryList: Category[];
  selectedCategoryIdes: any[] = [];
  selectedCategory: Category[] = [];
  cards: any[]

  ngOnInit(): void {
    this.category.getAllCategory().subscribe(res => {
      this.categoryList = res;
    })


  }


  getPostOfCategory(item: Category ) {
    if (!this.selectedCategoryIdes.includes(item.id) && item) {
      this.selectedCategoryIdes.push(item.id)
      this.selectedCategory.push(item)
    }
    this.category.getCategoryPosts(this.selectedCategoryIdes).subscribe(res => {
      this.cards = res;
    })
  }

  removeIem(item: Category) {
    this.selectedCategory.forEach((category, index) => {
      if (item?.id! === category.id) {
        this.selectedCategory.splice(index, 1)
        this.selectedCategoryIdes.splice(index, 1)
        this.category.getCategoryPosts(this.selectedCategoryIdes).subscribe(res => {
          this.cards = res;
        })
      }
    })
  }
}
