import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {ShareService} from "../../../../shared/structure/share/share.service";
import {SingInReqDto, singUpReqDto} from "../login.req.dto";
import {SingUpResDto, SinIinResDto} from "../login.res.dto";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private share: ShareService) {
  }

  singIn(singInReqDto: SingInReqDto): Observable<SinIinResDto> {
    return this.http.post<SinIinResDto>(environment.apiUrl + 'auth/public/signin', singInReqDto)
    // .pipe(timeout(1000),
    // retry({
    //     count: 3,
    //     delay: (err, countNum) => {
    //       console.error(`can not take data in ${countNum} try`, err)
    //       return timer(1000 * countNum)
    //     }
    //   }
    // ),
    // catchError(this.handelError))
  }

  singUp(registerDto: singUpReqDto) :Observable<SingUpResDto> {
    return this.http.post<SingUpResDto>(environment.apiUrl + 'auth/public/signup', registerDto)
  }

  getUserByEmail(email: string) {
    return this.http.get<any>(environment.apiUrl + 'user/get/email', {params: {email}})
  }


}
