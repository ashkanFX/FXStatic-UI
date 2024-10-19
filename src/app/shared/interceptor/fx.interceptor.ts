import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject} from "@angular/core";
import {ShareService} from "../structure/share/share.service";
import {SessionService} from "../structure/session/session.service";

export const fXInterceptor: HttpInterceptorFn = (req, next) => {
  const session = inject(SessionService);
  let headers = req.headers;
  headers = headers.set('Authorization', "Bearer " + removeQuotationOfStatEnd(window.sessionStorage.getItem('access_token')))
  const authReq = req.clone({headers});
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // session.clearAllItemInSessionStorage();
      let errorMessage = '';
      const share = inject(ShareService)
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Client-side error: ${error.error.message}`;
      } else {
        share.SetUserDetail = null
        errorMessage = `Server error: ${error.status} - ${error.message}`;
      }
      console.error(errorMessage);
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
