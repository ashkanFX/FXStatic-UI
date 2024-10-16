import {Component, OnInit} from '@angular/core';
import {ChartModule} from "primeng/chart";

import {BasicGridComponent} from "../../../core/grid/basic-grid/basic-grid.component";
import {CreatPostComponent} from "./creat-post/creat-post.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    ChartModule,

    BasicGridComponent,
    CreatPostComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {

  }
}
