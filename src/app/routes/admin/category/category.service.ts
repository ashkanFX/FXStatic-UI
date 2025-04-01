import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, retry, throwError, timeout, TimeoutError, timer} from "rxjs";
import {Category} from "./Category";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.apiUrl + 'category/public/get/all').pipe(timeout(5000), retry({
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
    return this.http.post<Category>(environment.apiUrl + 'category', category).pipe(timeout(1000), retry({
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
    return this.http.delete(environment.apiUrl + `category/${id}`).pipe(timeout(1000), retry({
          count: 3,
          delay: (err, countNum) => {
            console.error(`can not take data in ${countNum} try`, err)
            return timer(1000 * countNum)
          }
        }
      ),
      catchError(this.handelError))
  }

  getCategory(id: string): Observable<any> {
    return this.http.get(environment.apiUrl + `category/get/${id}`).pipe(timeout(1000), retry({
          count: 3,
          delay: (err, countNum) => {
            console.error(`can not take data in ${countNum} try`, err)
            return timer(1000 * countNum)
          }
        }
      ),
      catchError(this.handelError));
  }

  getCategoryPosts(ids: number[]): Observable<any> {
    return this.http.post(environment.apiUrl + `category/public/get/post`, {id: ids}).pipe(timeout(1000), retry({
          count: 3,
          delay: (err, countNum) => {
            console.error(`can not take data in ${countNum} try`, err)
            return timer(1000 * countNum)
          }
        }
      ),
      catchError(this.handelError));
  }

  updateCategory(reqDto: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(reqDto).forEach(key => {
      if (reqDto[key] !== null && reqDto[key] !== undefined) {
        params = params.set(key, reqDto[key].toString());
      }
    });
    return this.http.post(environment.apiUrl + `category/update`, null, {params}).pipe(timeout(1000), retry({
          count: 3,
          delay: (err, countNum) => {
            console.error(`can not take data in ${countNum} try`, err)
            return timer(1000 * countNum)
          }
        }
      ),
      catchError(this.handelError));
  }

  handelError(error: HttpErrorResponse | TimeoutError) {
    return throwError(() => {
      console.error(error.message)
    })
  }
}
