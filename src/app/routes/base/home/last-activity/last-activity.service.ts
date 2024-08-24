import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LastActivityService {

  constructor(private http: HttpClient) {}
}
