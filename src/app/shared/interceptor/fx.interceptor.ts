import {HttpInterceptorFn} from '@angular/common/http';

export const fXInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = 'YOUR_AUTH_TOKEN_HERE';
  debugger
  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  // Pass the cloned request with the updated header to the next handler
  return next(authReq);

};
