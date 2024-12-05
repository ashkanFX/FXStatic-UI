import {Component, Input, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CommonModule, NgClass} from "@angular/common";
import {navBar} from "../../shared/interface/nav.interface";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RippleModule, NgClass, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  @Input() config: navBar = new navBar()
  onShow: string = "hidden"

  constructor() {
  }

  ngOnInit(): void {
    this.config.upDateNavBar?.subscribe(res => {
      this.config = res
    })
  }

  ngClick() {
    if (this.onShow === "hidden") {
      this.onShow = "block scalein  animation-duration-90"
    } else {
      this.onShow = "hidden"
    }
  }

  clicked(item: any) {
    item.clicked()
  }

}
