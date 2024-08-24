import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {DropdownModule} from "primeng/dropdown";
import {PostService} from "./post.service";
import {ReplaySubject} from "rxjs";
import {UserDetailComponent} from "../../../../core/user-detail/user-detail.component";
import {CardComponent} from "../../../../core/card/card.component";
import {CategoryService} from "../../category/category.service";
import {UserDetailConfig} from "../../../../core/user-detail/UserDetailConfig";
import {ProfileService} from "../../profile/profile.service";
import {ReqAddPostDto} from "../req-add-post.dto";
import {BasicGridComponent} from "../../../../core/grid/basic-grid/basic-grid.component";
import {ConfigGrid} from "../../../../core/grid/basic-grid/config-grid";
import {ShareService} from "../../../../shared/structure/share.service";

@Component({
  selector: 'app-creat-post',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    JsonPipe,
    FileUploadModule,
    ToastModule,
    CardComponent,
    DropdownModule,
    UserDetailComponent,
    BasicGridComponent
  ],
  providers: [PostService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './creat-post.component.html',
  styleUrl: './creat-post.component.css'
})
export class CreatPostComponent implements OnInit {
  constructor(private fb: FormBuilder, private post: PostService,
              private categoryService: CategoryService,
              private profileService: ProfileService,
              private share: ShareService,
              private service: PostService) {

  }

  formGroup: FormGroup;
  userConfig = new ReplaySubject<UserDetailConfig>();
  category: any = [];
  @ViewChild('grid') grid: BasicGridComponent;
  configGrid: ConfigGrid = {
    class: [],
    columnName: [],
    configGridUpdate: new ReplaySubject<ConfigGrid>(),
    name: "",
    rowBody: []
  };

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(res => {
      this.category = res;
    })
    this.formGroup = this.fb.group({
      title: new FormControl(null, [Validators.required, Validators.min(10)]),
      description: new FormControl(null, [Validators.required]),
      categories: new FormControl(null, [Validators.required])
    })
    this.prepareGird()
  }


  savePost() {
     const postForm = this.formGroup.getRawValue()
    const post = new ReqAddPostDto();
    post.title = postForm.title;
    post.description = postForm.description;
    post.profileId = this.share.GetUserDetail.id;
    post.categories = [postForm.categories.id];
    this.service.appPost(post).subscribe(response => {
      this.formGroup.reset();
      this.prepareGird();
    })
  }

  prepareGird() {
    this.post.getAllPost().subscribe(response => {
      this.configGrid.configGridUpdate.next({
        class: [],
        columnName: ['name', 'description', 'category'],
        configGridUpdate: new ReplaySubject<ConfigGrid>(),
        name: "",
        rowBody: response.body,
        operation: {
          delete: (rowBody) => {
            this.service.deletePost(rowBody.id).subscribe(res => {
              this.prepareGird();
            });
          },
          update: () => {
          }
        }
      })
    })
  }
}
