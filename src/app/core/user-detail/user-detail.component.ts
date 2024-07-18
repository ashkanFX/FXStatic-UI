import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {UserDetailConfig} from "./UserDetailConfig";
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-user-detail[config]',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  @Input() config: ReplaySubject<UserDetailConfig>;
  // @ViewChild('UserDetail' ) UserDetail: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    // this.config.subscribe({
    //   next: (res) => {
    //     if (res.isShow) {
    //       this.UserDetail.nativeElement.innerText = 'name :' + res.name
    //     } else {
    //       this.UserDetail.nativeElement.innerText = ''
    //     }
    //   }
    // })
  }
}
