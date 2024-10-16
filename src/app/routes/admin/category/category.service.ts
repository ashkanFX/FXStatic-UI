import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError, timeout, TimeoutError, timer} from "rxjs";
import {Category} from "./Category";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.apiUrl + 'category/getAll').pipe(timeout(1000), retry({
          count: 3,
          delay: (err, countNum) => {
            console.error(`can not take data in ${countNum} try`, err)
            return timer(1000 * countNum)
          }
        }
      ),
      catchError(this.handelError))
  }

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(environment.apiUrl + 'category/add', category).pipe(timeout(1000), retry({
          count: 3,
          delay: (err, countNum) => {
            console.error(`can not take data in ${countNum} try`, err)
            return timer(1000 * countNum)
          }
        }
      ),
      catchError(this.handelError))
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(environment.apiUrl + `category/delete/${id}`, {observe: 'response', withCredentials: true}).pipe(timeout(1000), retry({
          count: 3,
          delay: (err, countNum) => {
            console.error(`can not take data in ${countNum} try`, err)
            return timer(1000 * countNum)
          }
        }
      ),
      catchError(this.handelError))
  }

  handelError(error: HttpErrorResponse | TimeoutError) {
    return throwError(() => {
      console.error(error.message)
    })
  }
}
