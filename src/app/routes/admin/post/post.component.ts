import {Component, OnInit} from '@angular/core';
import {ChartModule} from "primeng/chart";

import {BasicGridComponent} from "../../../core/grid/basic-grid/basic-grid.component";
import {DropdownModule} from "primeng/dropdown";
import {CheckboxModule} from "primeng/checkbox";
import {Button} from "primeng/button";
import {ConfigGrid} from "../../../core/grid/basic-grid/config-grid";
import {ReplaySubject} from "rxjs";
import {UserResDto} from "../user/user.res.dto";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    ChartModule,
    BasicGridComponent,
    DropdownModule,
    CheckboxModule,
    Button,
    TitleCasePipe,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  constructor() {}
  configGrid: ConfigGrid = {
    class: [],
    columnName: [],
    columnNameAlias: ['id', 'name', 'email'],
    configGridUpdate: new ReplaySubject<ConfigGrid>(),
    title: 'user',
    rowBody: new Array(new UserResDto()),
  };
  ngOnInit(): void {

  }
}
