import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./Category";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.apiUrl + 'category/getAll',)
    // .pipe(catchError())
  }

  public addCategory(category: Category): Observable<HttpResponse<Category>> {
    return this.http.post<Category>(environment.apiUrl + 'category/add', category,
      {observe: 'response', withCredentials: true})
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(environment.apiUrl + `category/delete/${id}`, {observe: 'response', withCredentials: true})
  }
}
