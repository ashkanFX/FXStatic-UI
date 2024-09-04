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
import {BasicGridComponent} from "../../../core/grid/basic-grid/basic-grid.component";
import {ConfigGrid} from "../../../core/grid/basic-grid/config-grid";
import {ReplaySubject} from "rxjs";

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
    BasicGridComponent,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  config: MainPageInterface;
  categoryForm: FormGroup;
  service = inject(CategoryService)
  configGrid: ConfigGrid = {
    class: [],
    columnName: [],
    configGridUpdate: new ReplaySubject<ConfigGrid>(),
    name: "",
    rowBody: []
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.config = {
      bgColor: 'bg-3-color'
    }
    this.categoryForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      active: new FormControl(true, [Validators.required]),
      color: new FormControl('#72B644', [Validators.required])
    })
    this.prepareGrid()
  }

  public saveCategory() {
    const category = new Category();
    category.name = this.categoryForm.get('name')?.value
    category.color = this.categoryForm.get('color')?.value
    category.active = this.categoryForm.get('active')?.value
    this.service.addCategory(category).subscribe(res => {// TODO need toast
      this.prepareGrid();
    })
  }

  public prepareGrid() {
    this.service.getAllCategory().subscribe(response => {
      this.configGrid.configGridUpdate.next({
        class: [],
        columnName: ['id', 'name'],
        configGridUpdate: new ReplaySubject<ConfigGrid>(),
        name: "",
        rowBody: response,
        operation: {
          delete: (selectedRow) => {
            this.deleteCategory(selectedRow.id);
           },
          update: () => {
          }
        }
      })
    })
  }

  deleteCategory(id: string) {
    this.service.deleteCategory(id).subscribe(() => {
      this.prepareGrid();
     })
  }
}
