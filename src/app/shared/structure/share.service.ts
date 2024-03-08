import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }
  _category =new Subject<string>()
}
