import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.development";
import {PostReqDto} from "./post-req.dto";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  public addPost(post: PostReqDto): Observable<PostReqDto> {
    return this.http.post<PostReqDto>(environment.apiUrl + 'post', post)
  }

  public updatePost(post: PostReqDto, id: string): Observable<PostReqDto> {
    return this.http.put<PostReqDto>(environment.apiUrl + `post/${id}`, post)
  }

  public getAll(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'post/get/all')
  }

  public getById(id: string | null): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `post/public/get/${id}`)
  }

  public deletePost(id: string): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + `post/${id}`)
  }

  public getLatestPost(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'post/public/get/latest')
  }

  public uploadPostImg(FormData: FormData): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'document/upload', FormData)
  }


}
