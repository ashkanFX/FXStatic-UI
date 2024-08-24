import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment.development";
import {LoginResDto} from "./login.res.dto";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(loginResDto: LoginResDto): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'api/v1/auth/authenticate', loginResDto)
  }

  register() {
    return this.http.post<any>(environment.apiUrl + 'register',
      {
        name: "ashkan",
        password: "1234",
        mobile: "01234",
        rolde: "ROLE_ADMIN"
      })

  }
}
