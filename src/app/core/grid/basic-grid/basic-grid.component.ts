import {Component, Input, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {ConfigGrid} from "./config-grid";
import {CommonModule, NgFor, NgForOf, NgIf, NgStyle, TitleCasePipe} from "@angular/common";
import {SortEvent} from "primeng/api";

@Component({
  selector: 'app-basic-grid',
  standalone: true,
  imports: [
    TableModule,
    NgFor,
    NgForOf,
    NgIf,
    NgStyle,
    TableModule,
    CommonModule,
    TitleCasePipe
  ],
  templateUrl: './basic-grid.component.html',
  styleUrl: './basic-grid.component.css',


})
export class BasicGridComponent implements OnInit {
  @Input() configGrid: ConfigGrid = new ConfigGrid();
    constructor() {
   }
  metaKey: boolean = true;

  selectedProducts! :any
  ngOnInit(): void {
    this.configGrid.configGridUpdate.subscribe(res => {
      this.configGrid = res;
    })
  }

  pageChange(event) {
  }

  customSort(event: SortEvent) {
  }

  truncateText(text, maxLength = 180) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  }
}

