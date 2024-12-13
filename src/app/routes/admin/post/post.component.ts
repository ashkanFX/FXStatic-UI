import {Component, OnInit} from '@angular/core';
import {ChartModule} from "primeng/chart";

import {BasicGridComponent} from "../../../core/grid/basic-grid/basic-grid.component";
import {DropdownModule} from "primeng/dropdown";
import {ConfigGrid} from "../../../core/grid/basic-grid/config-grid";
import {ReplaySubject} from "rxjs";
import {UserResDto} from "../user/user.res.dto";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {EditorModule} from "primeng/editor";
import {TitleCasePipe} from "@angular/common";
import {QuillModule} from 'ngx-quill';
import {InputTextModule} from "primeng/inputtext";
import {Button} from "primeng/button";
import {PostService} from "./post.service";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    ChartModule,
    BasicGridComponent,
    DropdownModule,
    ReactiveFormsModule,
    QuillModule,
    TitleCasePipe,
    EditorModule,
    InputTextModule,
    Button,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  constructor(
    private fb: FormBuilder ,
    private service : PostService
  ) {
  }

  configGrid: ConfigGrid = {
    class: [],
    columnName: [],
    columnNameAlias: ['id', 'name', 'email'],
    configGridUpdate: new ReplaySubject<ConfigGrid>(),
    title: 'user',
    rowBody: new Array(new UserResDto()),
  };
  formGroup: FormGroup;
  text: string | undefined;
  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['blockquote', 'code-block'],
      [{list: 'ordered'}, {list: 'bullet'}],
      [{header: [1, 2, 3, 4, 5, 6, false]}],
      [{color: []}, {background: []}],
      ['link', 'image']
    ]
  };

  ngOnInit(): void {
    this.prepareFormGroup()
  }

  private prepareFormGroup() {
    this.formGroup = this.fb.group({
      title: new FormControl(null),
      description: new FormControl(null),
    })
  }

  saveChanges() {
    this.service.addPost(this.formGroup.getRawValue()).subscribe(res=>{

    })
  }
}
