import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'api/v1/auth/authenticate', {
      email: "ashkaan@gmail.com",
      password: "1234"
    })
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
