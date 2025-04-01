import {Component, Input, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CommonModule, NgClass} from "@angular/common";
import {navBar} from "../../shared/interface/nav.interface";
import {ImgModel} from "../../shared/model/img.model";
import {ImgIconEnum} from "../../shared/enums/imgIcon.enum";
import {MenuItem} from "primeng/api";

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
  icon = new ImgModel(ImgIconEnum.logoBgWithe, 90, 50, "test")

  constructor() {
  }

  // ngOnInit(): void {
  //   this.config.upDateNavBar?.subscribe(res => {
  //     this.config = res
  //   })
  // }
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U'
          },
          {
            separator: true
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                badge: '2'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                badge: '3'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3'
      }
    ];
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
