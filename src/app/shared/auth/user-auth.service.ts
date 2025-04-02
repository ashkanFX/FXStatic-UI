import {Injectable} from '@angular/core';
import {Roles} from "../enums/Roles";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() {
  }

  checkIsAdmin(roles: Roles[]): boolean {
    let isContain = false
    roles?.forEach((role) => {
      switch (role) {
        case Roles.ROLE_ADMIN:
          isContain = true
          break
        default :
          isContain = false
          break
      }
    })
    return isContain;
  }

}
