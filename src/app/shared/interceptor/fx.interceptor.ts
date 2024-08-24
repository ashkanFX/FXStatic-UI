import {HttpInterceptorFn} from '@angular/common/http';

export const fXInterceptor: HttpInterceptorFn = (req, next) => {

  let headers = req.headers;

  headers = headers.set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2hrYW5mb3RvaGk4MUBnbWFpbC5jb20iLCJpYXQiOjE3MjUwMDE5NzgsImV4cCI6MTcyNTAwNTU3OH0.uPBiQzFrtG75O1kQhA13cypqutkNh3wVsERQNaEQJ1E")

  const authReq = req.clone({headers});
  return next(authReq);
};
