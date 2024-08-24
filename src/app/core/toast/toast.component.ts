import {Component} from '@angular/core';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [ToastModule, ButtonModule, RippleModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {


}
