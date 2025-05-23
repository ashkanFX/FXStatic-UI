import {Injectable} from '@angular/core';
import {SessionService} from "../session/session.service";
import {Subject} from "rxjs";
import {UserAuthService} from "../../auth/user-auth.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private session: SessionService, private userAuthService: UserAuthService, private route: Router, private fb: FormBuilder  ) {
  }

  toast = new Subject<any>();
  routeService = this.route;
  FormBuilderService = this.fb;
  UserAuthService = this.userAuthService;
  private _user: any

  get GetUserDetail() {
    try {
      this._user = this.session.getItemInSessionStorage('currentUser')
      return this._user;
    } catch (error) {
      throw Error('user is not set in session storage')
    }
  }
  get isLogin() : boolean {
      return !!this.session.getItemInSessionStorage('jwtToken')
  }

  set SetUserDetail(userDetail: any) {
    try {
      this.session.setItemInSessionStorage('currentUser', userDetail)
    } catch (error) {
      throw Error('can not set data for user')
    }
  }

  convertResponseToObj(obj: any): Object {
    const cloneObj$ = {}
    Object.keys(obj).forEach(key => {
        Object.defineProperty(cloneObj$, key, {value: obj[key]})
      }
    )
    return cloneObj$
  }

}
