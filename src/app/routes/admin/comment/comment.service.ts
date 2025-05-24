import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentReqDto} from "./comment.req.dto";
import {environment} from "../../../../environments/environment";
import {CommentResDto} from "./comment.res.dto";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  public addComment(comments: CommentReqDto): Observable<CommentReqDto> {
    return this.http.post<CommentReqDto>(environment.apiUrl + 'comments/add', comments)
  }

  public activeComment(postId: number): Observable<CommentResDto[]> {
    return this.http.get<CommentResDto[]>(environment.apiUrl + `comments/public/active/${postId}`)
  }

  public getAll(): Observable<CommentResDto[]> {
    return this.http.get<CommentResDto[]>(environment.apiUrl + 'comments/get/all')
  }

  public activeStatus(id: number, status: boolean): Observable<CommentResDto[]> {
    return this.http.put<CommentResDto[]>(environment.apiUrl + `comments/${id}/status?status=${status}` ,[])
  }
  public lastComment(): Observable<CommentResDto[]> {
    return this.http.get<CommentResDto[]>(environment.apiUrl + `comments/public/latest` )
  }


}
