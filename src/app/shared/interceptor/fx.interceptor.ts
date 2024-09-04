import {HttpInterceptorFn} from '@angular/common/http';

export const fXInterceptor: HttpInterceptorFn = (req, next) => {
  let headers = req.headers;

  headers = headers.set('Authorization', "Bearer " + removeQuotationOfStatEnd(window.sessionStorage.getItem('access_token')))

  const authReq = req.clone({headers});
  return next(authReq);
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
