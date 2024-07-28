import {HttpInterceptorFn} from '@angular/common/http';

export const fXInterceptor: HttpInterceptorFn = (req, next) => {
  let userLogin = JSON.parse(sessionStorage.getItem('userdetails')!)
  const authReq = req.clone({
    setHeaders: {
      Authorization: "Basic " + window.btoa(userLogin.username   + ':' + userLogin.password)
    }
  });


  return next(authReq);

};
