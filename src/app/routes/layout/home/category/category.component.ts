import {Component, OnInit} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {NgForOf, NgStyle, TitleCasePipe} from "@angular/common";
import {CategoryService} from "../../../admin/category/category.service";
import {Category} from "../../../admin/category/Category";
import {ProgrammingLanguageColor} from "../../../../shared/enums/ProgrammingLanguageColor";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    DividerModule,
    ButtonModule,
    NgForOf,
    TitleCasePipe,
    NgStyle
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  constructor(private category: CategoryService) {
  }

  categoryList: Category[];
  selectedCategoryIdes: any[] = [];
  selectedCategory: Category[] = [];
  cards: any[]

  findCategoryColor(name: string): string {
    const key = Object.keys(ProgrammingLanguageColor).find(
      item => item.toLocaleUpperCase() === name.toLocaleUpperCase()
    );
    return key ? ProgrammingLanguageColor[key as keyof typeof ProgrammingLanguageColor] : '#ccc';
  }
    getTextColorForBackground(bgColor: string): string {
    const hex = bgColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

     const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? '#000000' : '#FFFFFF';
  }


  ngOnInit(): void {
    this.category.getAllCategory().subscribe(res => {
      this.categoryList = res;
    })
  }


  getPostOfCategory(item: Category) {
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
