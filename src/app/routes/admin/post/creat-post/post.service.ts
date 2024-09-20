import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReqAddPostDto} from "../req-add-post.dto";
import {environment} from "../../../../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  appPost(post: ReqAddPostDto): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'post/add', post,
      { observe: 'response',withCredentials: true })
  }

  getAllPost(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'post/getAll',
      {observe: 'response', withCredentials: true})
  }

  deletePost(id: number): Observable<boolean> {
    return this.http.delete<boolean>(environment.apiUrl + `post/delete/${id}`)
  }

  getLatestPost(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'post/get/latest')
  }

}
