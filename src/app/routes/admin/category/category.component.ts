import {Component, inject, OnInit} from '@angular/core';
import {MainPageComponent} from "../../../core/pageConfig/main-page/main-page.component";
import {MainPageInterface} from "../../../shared/interface/mainPage.interface";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputSwitchModule} from "primeng/inputswitch";
import {ColorPickerModule} from "primeng/colorpicker";
import {JsonPipe} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {CategoryService} from "./category.service";
import {Category} from "./Category";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    MainPageComponent,
    ReactiveFormsModule,

    InputTextModule,
    InputSwitchModule,
    ColorPickerModule,
    JsonPipe,
    ButtonModule,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  config: MainPageInterface;
  categoryForm: FormGroup;
  category = inject(CategoryService)

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.config = {
      bgColor: 'bg-3-color'
    }
    this.categoryForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      isActive: new FormControl(true, [Validators.required]),
      color: new FormControl(null, [Validators.required])
    })
    this.categoryForm.valueChanges.subscribe(res => {
      console.log(res);
    })
  }

  public saveCategory() {
    debugger
    const category = new Category();
    category.name = this.categoryForm.get('name')?.value
    this.category.addCategory(category.name).subscribe(res => {

    })
  }
}
