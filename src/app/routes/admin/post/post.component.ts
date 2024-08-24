import {Component, OnInit} from '@angular/core';
import {ChartModule} from "primeng/chart";
import {DoughnutChartComponent} from "../../../core/chart/doughnut-chart/doughnut-chart.component";
import {BasicChartComponent} from "../../../core/chart/basic-chart/basic-chart.component";
import {BasicGridComponent} from "../../../core/grid/basic-grid/basic-grid.component";
import {CreatPostComponent} from "./creat-post/creat-post.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    ChartModule,
    DoughnutChartComponent,
    BasicChartComponent,
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
