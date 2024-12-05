import {Component, OnInit} from '@angular/core';
import {BasicGridComponent} from '../../../core/grid/basic-grid/basic-grid.component';
import {MainPageInterface} from '../../../shared/interface/mainPage.interface';
import {ConfigGrid} from '../../../core/grid/basic-grid/config-grid';
import {ReplaySubject} from 'rxjs';
import {UserService} from "./user.service";
import {UserResDto} from "./user.res.dto";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    BasicGridComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(private service: UserService) {
  }

  config: MainPageInterface;

  configGrid: ConfigGrid = {
    class: [],
    columnName: [],
    columnNameAlias: ['id', 'name', 'email'],
    configGridUpdate: new ReplaySubject<ConfigGrid>(),
    title: 'user',
    rowBody: new Array(new UserResDto()),
  };

  ngOnInit() {
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
          delete: (selectedRow) => {
          },
          update: (selectedRow) => {
          }
        }
      })
    })
  }

}
