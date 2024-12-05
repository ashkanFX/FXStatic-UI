import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject} from "@angular/core";
import {ShareService} from "../structure/share/share.service";
import {SessionService} from "../structure/session/session.service";
import {LoadingService} from "../structure/loading/loading/loading.service";

export const fXInterceptor: HttpInterceptorFn = (req, next) => {
  const session = inject(SessionService);
  const loading = inject(LoadingService);
  let headers = req.headers;

  const authReq = req.clone({headers});
  return next(authReq).pipe();
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
