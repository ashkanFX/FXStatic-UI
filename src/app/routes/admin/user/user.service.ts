import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {CurrentUserResDto, UserResDto} from "./user.res.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getAllUser(): Observable<any> {
    return this.http.get<UserResDto>(environment.apiUrl + 'admin/getusers')
  }

  public getCurrentUSer(): Observable<CurrentUserResDto> {
    return this.http.get<CurrentUserResDto>(environment.apiUrl + 'auth/user')
  }
}
