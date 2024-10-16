import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError, timeout, TimeoutError, timer} from "rxjs";
import {environment} from "../../../../../environments/environment.development";
import {LoginResDto, RegisterDto} from "./login.res.dto";
import {ShareService} from "../../../../shared/structure/share/share.service";
import {Toast} from "../../../../shared/model/Toast";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private share: ShareService) {
  }

  login(loginResDto: LoginResDto): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'api/v1/auth/authenticate', loginResDto).pipe(timeout(1000),
      retry({
          count: 3,
          delay: (err, countNum) => {
            console.error(`can not take data in ${countNum} try`, err)
            return timer(1000 * countNum)
          }
        }
      ),
      catchError(this.handelError))
  }

  register(registerDto: RegisterDto) {
    return this.http.post<any>(environment.apiUrl + 'api/v1/auth/register', registerDto)
  }

  getUserByEmail(email: string) {
    return this.http.get<any>(environment.apiUrl + 'user/get/email', {params: {email}})
  }

  handelError(error: HttpErrorResponse | TimeoutError) {
    return throwError(() => {
      debugger
      this.share.toast.next(new Toast('success', 'Success', error.message));
    })
  }
}
