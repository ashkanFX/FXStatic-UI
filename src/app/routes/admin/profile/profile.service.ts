import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getById(): Observable<any> {
    return this.http.post(environment.apiUrl+'profile/get',[],{
      params:{
        id:2
      }
    })
  }

}
