import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./Category";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getAllCategory(): Observable<Category> {
    return this.http.get<Category>(environment.apiUrl + 'category/getAll')
  }

  public addCategory(name: string): Observable<Category> {
    return this.http.post<Category>(environment.apiUrl + 'category/add', {name})
  }
}
