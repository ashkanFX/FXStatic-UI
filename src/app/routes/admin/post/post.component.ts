import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {ChartModule} from "primeng/chart";

import {BasicGridComponent} from "../../../core/grid/basic-grid/basic-grid.component";
import {DropdownModule} from "primeng/dropdown";
import {ConfigGrid} from "../../../core/grid/basic-grid/config-grid";
import {ReplaySubject} from "rxjs";
import {UserResDto} from "../user/user.res.dto";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EditorModule} from "primeng/editor";
import {AsyncPipe, TitleCasePipe} from "@angular/common";
import {QuillModule} from 'ngx-quill';
import {InputTextModule} from "primeng/inputtext";
import {Button} from "primeng/button";
import {PostService} from "./post.service";
import {ShareService} from "../../../shared/structure/share/share.service";
import {severity, Toast} from "../../../shared/model/Toast";
import {MultiSelectModule} from "primeng/multiselect";
import {Category} from "../category/Category";
import {CategoryService} from "../category/category.service";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    ChartModule,
    BasicGridComponent,
    DropdownModule,
    MultiSelectModule,
    ReactiveFormsModule,
    QuillModule,
    TitleCasePipe,
    EditorModule,
    InputTextModule,
    Button,
    AsyncPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private share: ShareService,
    private service: PostService) {
  }

  configGrid: ConfigGrid = {
    class: [],
    columnName: [],
    columnNameAlias: ['id', 'name', 'email'],
    configGridUpdate: new ReplaySubject<ConfigGrid>(),
    title: 'user',
    rowBody: new Array(new UserResDto()),
  };
  selectedFile: File | null = null;
  formGroup: FormGroup;
  text: string | undefined;
  category: Category[];
  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['blockquote', 'code-block'],
      [{list: 'ordered'}, {list: 'bullet'}],
      [{header: [1, 2, 3, 4, 5, 6, false]}],
      [{color: []}, {background: []}],
      ['link', 'image'],
      [{'align': []}]
    ]
  };

  ngOnInit(): void {
    this.prepareFormGroup()
    this.preparePost()
    this.prepareCategory()
  }

  preparePost() {
    this.service.getAll().subscribe(res => {
      this.configGrid.configGridUpdate.next({
        class: [],
        columnName: ['id', 'title', 'description', 'context'],
        columnNameAlias: ['id', 'title', 'description', 'context'],
        configGridUpdate: new ReplaySubject<ConfigGrid>(),
        title: 'user',
        rowBody: res,
        operation: {
          view: (row) => {
            this.getPost(row.id)
          },
          update: (selectedRow) => {
          },
          delete: (row) => {
            this.deletePost(row.id)
          }
        }
      })
    })
  }

  prepareCategory() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.category = res;
    });
  }

  private prepareFormGroup() {
    this.formGroup = this.fb.group({
      id: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      file: new FormControl(null),
      category: new FormControl<Category[]>([]),
      context: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
    })

  }

  getPost(id: string) {
    this.service.getById(id).subscribe((res) => {
      this.formGroup.patchValue(res)
    })
  }

  deletePost(id: string) {
    this.service.deletePost(id).subscribe((res) => {
      this.share.toast.next(new Toast(severity.success, 'success', 'post deleted'));
      this.preparePost()
    })
  }

  saveChanges() {
    if (this.formGroup.valid) {
      if (this.formGroup.value.id) {
        this.service.updatePost(this.formGroup.getRawValue(), this.formGroup.value.id).subscribe(() => {
          this.formGroup.reset()
          this.preparePost()
        })
      } else {
        this.service.addPost(this.formGroup.getRawValue()).subscribe(() => {
          this.formGroup.reset()
          this.preparePost()
        })
      }
      this.share.toast.next(new Toast(severity.success, 'success', ''));
    } else {
      this.share.toast.next(new Toast(severity.Error, 'error', 'form kamel nis'));
    }
  }


  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('postId', this.formGroup.getRawValue().id);
      this.uploadFile(formData);
    }
  }

  uploadFile(formData: FormData): void {
    this.service.uploadPostImg(formData).subscribe(() => {
      this.share.toast.next(new Toast(severity.success, 'success', 'file is upload'));
      this.formGroup.reset()
    })
  }
}
