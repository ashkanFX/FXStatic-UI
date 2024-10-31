import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {Message, MessageService} from "primeng/api";
import {ShareService} from "./shared/structure/share/share.service";
import {ToastModule} from "primeng/toast";
import {LoadingService} from "./shared/structure/loading/loading/loading.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})

export class AppComponent implements OnInit {
  constructor(private share: ShareService,
              private messageService: MessageService,
              private loadingService: LoadingService
  ) {
  }
  loading$ = this.loadingService.loading$;


  ngOnInit(): void {
    this.share.toast.subscribe((res: Message) => {
      this.messageService.add(res);
    })
  }
}
