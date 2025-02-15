import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject} from "@angular/core";
import {ShareService} from "../structure/share/share.service";
import {SessionService} from "../structure/session/session.service";
import {severity, Toast} from "../model/Toast";
import {authGuard} from "../auth/auth.guard";

export const fXInterceptor: HttpInterceptorFn = (req, next) => {
  const share = inject(ShareService)
  let headers = req.headers;
  const session = inject(SessionService);

  headers = headers.set('Authorization', "Bearer " + removeQuotationOfStatEnd(window.sessionStorage.getItem('jwtToken')))

  const authReq = req.clone({headers});
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Client-side error: ${error.error.message}`;
      } else {
        share.SetUserDetail = null
        if (error?.message) {
          share.toast.next(new Toast(severity.Error, error.error.error, error.error.message))
        }
        errorMessage = `Server error: ${error.status} - ${error.message}`;
      }
      switch (error.status) {
        case 401 :
          session.clearAllItemInSessionStorage();
          authGuard
          break
        default:
          break
      }
      return throwError(() => new Error(errorMessage));
    })
  );
};

function removeQuotationOfStatEnd(stringText: string | null) {
  try {
    if (stringText) {
      const text = [...stringText]
      delete text[0]
      delete text[text.length - 1]
      return text.join('')
    }
    return null
  } catch (error) {
    throw Error("text is not valid")
  }
}

