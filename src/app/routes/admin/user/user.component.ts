import {Component, OnInit} from '@angular/core';
import {BasicGridComponent} from '../../../core/grid/basic-grid/basic-grid.component';
import {MainPageInterface} from '../../../shared/interface/mainPage.interface';
import {ConfigGrid} from '../../../core/grid/basic-grid/config-grid';
import {ReplaySubject} from 'rxjs';
import {UserService} from "./user.service";
import {UserResDto} from "./user.res.dto";
import {Button} from "primeng/button";
import {CardComponent} from "../../../core/card/card.component";
import {Card} from "../../../shared/interface/card.interface";
import {rout} from "../../../shared/model/routing.model";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {TitleCasePipe} from "@angular/common";
import {ContentHolderDirective} from "../../../shared/directive/content-holder.directive";

@Component({
  selector: 'app-user',
  standalone: true,
    imports: [
        BasicGridComponent,
        ReactiveFormsModule,
        TitleCasePipe,
        Button,
        CardComponent,
        InputTextModule,
        CheckboxModule,
        DropdownModule,
        ContentHolderDirective
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: UserService) {
  }

  userForm: FormGroup;
  config: MainPageInterface;

  configGrid: ConfigGrid = {
    class: [],
    columnName: [],
    columnNameAlias: ['id', 'name', 'email'],
    configGridUpdate: new ReplaySubject<ConfigGrid>(),
    title: 'user',
    rowBody: new Array(new UserResDto()),
  };
  role: string[];

  ngOnInit() {
    this.prepareFormGroup()
    this.prepareGrid();
  }

  public prepareGrid() {
    this.service.getAllUser().subscribe((res) => {
      this.configGrid.configGridUpdate.next({
        class: [],
        columnName: ['userId', 'userName', 'email', 'enabled'],
        columnNameAlias: ['id', 'name', 'email', 'status'],
        configGridUpdate: new ReplaySubject<ConfigGrid>(),
        title: 'user',
        rowBody: res,
        operation: {
          view: (row) => {},
          update: (selectedRow) => {
          }
        }
      })
    })
  }

  private prepareFormGroup() {
    this.userForm = this.fb.group({
      email: new FormControl(null),
      name: new FormControl(null),
      role: new FormControl(true),
      status: new FormControl(true),
      creatTime: new FormControl(true),
    })
  }

  getUserDetail() {

  }
}
