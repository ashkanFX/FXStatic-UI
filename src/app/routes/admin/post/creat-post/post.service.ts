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
    return this.http.post<any>(environment.apiUrl + 'post/add', post)
  }

  getAllPost(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'post/getAll')
  }

  deletePost(id: number): Observable<boolean> {
    return this.http.delete<boolean>(environment.apiUrl + `post/delete/${id}`)
  }


}
