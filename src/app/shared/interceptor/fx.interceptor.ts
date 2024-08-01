import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';

export const fXInterceptor: HttpInterceptorFn = (req, next) => {
  let userLogin = JSON.parse(sessionStorage.getItem('userdetails')!)
  let xsrfToken = getXsrfTokenFromCookie()
  console.log(xsrfToken);
  // let httpHeaders = new HttpHeaders();
  // httpHeaders.append("X-XSRF-TOKEN", JSON.parse(sessionStorage.getItem('XSRF-TOKEN')!))
  let headers = req.headers;
  if (userLogin?.username) {
    headers = headers.set('Authorization', `Basic `+window.btoa(userLogin.username + ':' + userLogin.password));
  }
  if (xsrfToken) {
    headers = headers.set('X-XSRF-TOKEN', xsrfToken);
  }

  // httpHeaders.append("authorization", window.btoa(userLogin.username + ':' + userLogin.password))
  const authReq = req.clone({
    headers
    // headers : httpHeaders
    // setHeaders: {
    //   Authorization: "Basic " + window.btoa(userLogin.username + ':' + userLogin.password),
    //   // "X-XSRF-TOKEN": JSON.parse(sessionStorage.getItem('XSRF-TOKEN')!)
    // }
    // headers :req.headers.set("Authorization","Basic " + window.btoa(userLogin.username + ':' + userLogin.password))
  });


  return next(authReq);

};



function getXsrfTokenFromCookie() {
  const matches = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  return matches ? decodeURIComponent(matches[1]) : null;
}
