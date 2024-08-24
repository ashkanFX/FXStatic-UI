import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() {
  }

  _category = new Subject<string>()
  private _user: any


  get GetUserDetail() {
    this._user = JSON.parse(window.sessionStorage.getItem("user")!);
    return this._user;
  }

  set SetUserDetail(userDetail: any) {
    window.sessionStorage.setItem("user", JSON.stringify(userDetail));
  }
}
