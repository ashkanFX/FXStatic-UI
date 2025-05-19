import {Component, Input, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {ConfigGrid} from "./config-grid";
import {NgFor, NgForOf, NgIf, NgStyle, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-basic-grid',
  standalone: true,
  imports: [
    TableModule,
    NgFor,
    NgForOf,
    NgIf,
    NgStyle,
    TitleCasePipe
  ],
  templateUrl: './basic-grid.component.html',
  styleUrl: './basic-grid.component.css',


})
export class BasicGridComponent implements OnInit {
  @Input() configGrid: ConfigGrid = new ConfigGrid();
  header: string[] = []
   constructor() {
   }
  ngOnInit(): void {
    this.configGrid.configGridUpdate.subscribe(res => {
      this.configGrid = res;
    })
  }
  truncateText(text, maxLength = 180) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  }
}

