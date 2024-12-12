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
    DropdownModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: UserService) {
  }

  userForm: FormGroup;
  config: MainPageInterface;
  cards: Card[] = [
    {
      isShow: true,
      router: rout.Main,
      haveProfile: false,
      img: '../assets/img/JavaScript-Tutorial.svg',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit? Adipisci autem debitis deserunt dicta error exercitationem, quasi suscipit?\n'
    }, {
      isShow: true,
      haveProfile: false,
      img: '../assets/img/typescript.svg',
      router: rout.Main,
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit? Adipisci autem debitis deserunt dicta error exercitationem, quasi suscipit?\n'
    }, {
      isShow: true,
      haveProfile: false,
      img: '../assets/img/Angular_Logo_SVG.svg',
      router: rout.Main,
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste laudantium non\n' +
        '      odit perferendis quas quos sit? Adipisci autem debitis deserunt dicta error exercitationem, quasi suscipit?\n'
    }
  ];
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
          view: (row) => {
          },
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
