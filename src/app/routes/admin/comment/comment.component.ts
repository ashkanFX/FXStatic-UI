import {Component, OnInit} from '@angular/core';
import {ContentHolderDirective} from "../../../shared/directive/content-holder.directive";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {BasicGridComponent} from "../../../core/grid/basic-grid/basic-grid.component";
import {ConfigGrid} from "../../../core/grid/basic-grid/config-grid";
import {ReplaySubject} from "rxjs";
import {UserResDto} from "../user/user.res.dto";
import {CommentService} from "./comment.service";
import {InputSwitchModule} from "primeng/inputswitch";
import {CommentResDto} from "./comment.res.dto";
import {ShareService} from "../../../shared/structure/share/share.service";
import {severity, Toast} from "../../../shared/model/Toast";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    ContentHolderDirective,
    FormsModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule,
    BasicGridComponent,
    InputSwitchModule
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  comment: CommentResDto
  status = new FormControl()
  configGrid: ConfigGrid = {
    class: [],
    columnName: [],
    columnNameAlias: ['id', 'status', 'comment'],
    configGridUpdate: new ReplaySubject<ConfigGrid>(),
    title: 'comment',
    rowBody: new Array(new UserResDto()),
    operation: {
      update: (row: CommentResDto) => {
        this.status.setValue(row.status)
        this.comment = row

      }
    }
  };

  constructor(private service: CommentService, private share: ShareService) {
  }

  ngOnInit(): void {
    this.prepareGrid()
    this.status.valueChanges.subscribe(res => {
      if (this.status.valid && this.status.dirty) {
        this.service.activeStatus(this.comment.id, res).subscribe(res => {
          this.share.toast.next(new Toast(severity.success, 'success', 'comment updated'));
        })
      }
    })
  }

  prepareGrid() {
    this.service.getAll().subscribe((res: CommentResDto[]) => {
      this.configGrid.configGridUpdate.next({
        class: [],
        columnName: ['id', 'status', 'comment', 'postTitle', 'username'],
        columnNameAlias: [],
        configGridUpdate: new ReplaySubject<ConfigGrid>(),
        title: 'post',
        operation: this.configGrid.operation,
        rowBody: res
      })
    })
  }
}
