import {Component} from '@angular/core';
import {ContentHolderDirective} from "../../../shared/directive/content-holder.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {BasicGridComponent} from "../../../core/grid/basic-grid/basic-grid.component";
import {ConfigGrid} from "../../../core/grid/basic-grid/config-grid";
import {ReplaySubject} from "rxjs";
import {UserResDto} from "../user/user.res.dto";
import {CommentService} from "./comment.service";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    ContentHolderDirective,
    FormsModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule,
    BasicGridComponent
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  configGrid: ConfigGrid = {
    class: [],
    columnName: [],
    columnNameAlias: ['id', 'status', 'comment'],
    configGridUpdate: new ReplaySubject<ConfigGrid>(),
    title: 'comment',
    rowBody: new Array(new UserResDto()),
  };

  constructor(private service: CommentService) {
  }

  ngOnInit(): void {
    this.prepareGrid()

  }

  prepareGrid() {
    this.service.getAll().subscribe(res => {
      this.configGrid.configGridUpdate.next({
        class: [],
        columnName: ['id', 'status', 'comment'],
        columnNameAlias: ['id', 'status', 'comment'],
        configGridUpdate: new ReplaySubject<ConfigGrid>(),
        title: 'post',
        rowBody: res,
        operation: null
      })
    })
  }

}
