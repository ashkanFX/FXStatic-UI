import {Injectable} from '@angular/core';
import {SessionService} from "../session/session.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private session: SessionService) {
  }

  toast = new Subject<any>();
  private _user: any

  get GetUserDetail() {
    try {
      this._user = this.session.getItemInSessionStorage('user')
      return this._user;
    } catch (error) {
      throw Error('user is not set in session storage')
    }
  }

  set SetUserDetail(userDetail: any) {
    try {
      this.session.setItemInSessionStorage('user', userDetail)
    } catch (error) {
      throw Error('can not set data for user')
    }
  }
}
