import {HttpInterceptorFn} from '@angular/common/http';

export const fXInterceptor: HttpInterceptorFn = (req, next) => {
  let userLogin = JSON.parse(sessionStorage.getItem('userdetails')!)
  let xsrfToken = getXsrfTokenFromCookie();
  let headers = req.headers;
  if (userLogin?.username) {
    headers = headers.set('Authorization', `Basic `+window.btoa(userLogin.username + ':' + userLogin.password));
  }
  if (xsrfToken) {
    headers = headers.set('X-XSRF-TOKEN', xsrfToken);
  }
  const authReq = req.clone({
    headers
  });
  return next(authReq);

};



function getXsrfTokenFromCookie() {
  const matches = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  return matches ? decodeURIComponent(matches[1]) : null;
}
