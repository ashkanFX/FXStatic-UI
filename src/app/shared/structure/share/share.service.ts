import {Injectable} from '@angular/core';
import {SessionService} from "../session/session.service";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private session: SessionService) {
  }

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
