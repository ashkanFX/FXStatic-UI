import {Component} from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [],
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.css'
})
export class FileUploaderComponent {
  column: [
    {
      name: string,
      id: string,
    }, {
      age: string,
      id: string,
    }
  ]
  row: [
    {
      name: "ali"
      age: 12
    }, {
      name: "ashkan"
      age: 21
    }
  ]
}
