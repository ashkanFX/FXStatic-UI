import {Component, OnInit} from '@angular/core';
import {MainPageComponent} from "../../../core/pageConfig/main-page/main-page.component";
import {MainPageInterface} from "../../../shared/interface/mainPage.interface";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputSwitchModule} from "primeng/inputswitch";
import {ColorPickerModule} from "primeng/colorpicker";
import {JsonPipe, NgIf} from "@angular/common";
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
    NgIf,

  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  config: MainPageInterface;
  categoryForm: FormGroup;
  configGrid: ConfigGrid = {
    class: [],
    columnName: [],
    configGridUpdate: new ReplaySubject<ConfigGrid>(),
    title: "",
    rowBody: []
  };

  constructor(private fb: FormBuilder, private service: CategoryService) {
  }

  ngOnInit(): void {
    this.config = {
      bgColor: 'bg-3-color'
    }
    this.categoryForm = this.fb.group({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      active: new FormControl(true, [Validators.required]),
    })
    this.prepareGrid()
  }

  public saveCategory() {
    const category = new Category();
    category.name = this.categoryForm.get('name')?.value
    if (this.categoryForm.get('id')?.value) {
      category.id = this.categoryForm.get('id')?.value
      this.service.updateCategory(category).subscribe(res => {
        this.prepareGrid();
        this.categoryForm.reset()
      })
    } else {
      this.service.addCategory(category).subscribe(res => {
        this.prepareGrid();
        this.categoryForm.reset()
      })
    }
  }

  public prepareGrid() {
    // this.service.getAllCategory().subscribe(response => {
    //   this.configGrid.configGridUpdate.next({
    //     class: [],
    //     columnName: ['id', 'name'],
    //     configGridUpdate: new ReplaySubject<ConfigGrid>(),
    //     title: 'category',
    //     rowBody: response,
    //     operation: {
    //       delete: (selectedRow) => {
    //         this.deleteCategory(selectedRow.id);
    //       },
    //       update: (selectedRow) => {
    //         this.updateCategory(selectedRow.id);
    //       }
    //     }
    //   })
    // })
  }

  deleteCategory(id: string) {
    this.service.deleteCategory(id).subscribe(() => {
      this.prepareGrid();
    })
  }

  updateCategory(id: string) {
    this.service.getCategory(id).subscribe((res) => {
      this.categoryForm.patchValue({
        id: res.id,
        name: res.name,
      });
    });
  }

}
