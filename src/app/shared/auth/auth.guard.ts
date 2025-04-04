import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {SessionService} from "../structure/session/session.service";
import {Roles} from "../enums/Roles";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sessionService = inject(SessionService);
  let userLogin = sessionService.getItemInSessionStorage('jwtToken')
  let roles: string[] = sessionService.getItemInSessionStorage('roles')
  let isAdmin = roles?.includes(Roles.ROLE_ADMIN)
  if (userLogin && isAdmin) {
    return true
  } else {
    router.navigate(['/login']);
    return false;
  }
};
