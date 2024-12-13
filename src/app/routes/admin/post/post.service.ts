import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserResDto} from "../user/user.res.dto";
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
  public getAll(): Observable<PostReqDto> {
    return this.http.get<PostReqDto>(environment.apiUrl + 'post/get/all')
  }


}
