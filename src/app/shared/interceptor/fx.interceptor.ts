import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject, PLATFORM_ID} from "@angular/core";
import {ShareService} from "../structure/share/share.service";
import {SessionService} from "../structure/session/session.service";
import {severity, Toast} from "../model/Toast";
import {isPlatformBrowser} from "@angular/common";

export const fXInterceptor: HttpInterceptorFn = (req, next) => {
  const share = inject(ShareService);
  const session = inject(SessionService);
  const platformId = inject(PLATFORM_ID);
  let headers = req.headers;

  let token: string | null = null;

  if (isPlatformBrowser(platformId)) {
    const rawToken = window.sessionStorage.getItem('jwtToken');
    token = removeQuotationOfStatEnd(rawToken);
  }

  if (token) {
    headers = headers.set('Authorization', "Bearer " + token);
  }

  const authReq = req.clone({headers});

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Client-side error: ${error.error.message}`;
      } else {
        share.SetUserDetail = null;

        if (error?.message) {
          share.toast.next(new Toast(severity.Error, error.error.error, error.error.message));
        }

        errorMessage = `Server error: ${error.status} - ${error.message}`;
      }

      switch (error.status) {
        case 401:
          session.clearAllItemInSessionStorage();
          break;
        default:
          break;
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

