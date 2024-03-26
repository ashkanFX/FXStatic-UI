import {Component} from '@angular/core';
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-last-activity',
  standalone: true,
    imports: [
        DividerModule
    ],
  templateUrl: './last-activity.component.html',
  styleUrl: './last-activity.component.css'
})
export class LastActivityComponent {

}
