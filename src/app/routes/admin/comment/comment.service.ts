import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentReqDto} from "./comment.req.dto";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  public addComment(comments: CommentReqDto): Observable<CommentReqDto> {
    return this.http.post<CommentReqDto>(environment.apiUrl + 'comments/public/add', comments)
  }

  public activeComment(postId :number): Observable<CommentReqDto[]> {
    return this.http.get<CommentReqDto[]>(environment.apiUrl + `comments/public/active/${postId}`)
  }

  public getAll(): Observable<any> {
    return this.http.get<CommentReqDto[]>(environment.apiUrl + 'comments/get/all')
  }

  public getById(id: string | null): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `post/public/get/${id}`)
  }

  public deleteComment(id: string): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + `post/${id}`)
  }

  public getLatestComment(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'post/public/get/latest')
  }

  public uploadCommentImg(FormData: FormData): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'document/upload', FormData)
  }

}
