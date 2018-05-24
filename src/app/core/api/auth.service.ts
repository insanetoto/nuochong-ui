import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: _HttpClient
  ) { }

  getToken(username: String, password: String): Observable<any> {
     // OAUTH2协议中， /oauth/toke控制器通过 @RequestParams获取参数，不能使用json格式进行交互，发起/oauth/toke请求前需要对请求头、请求体进行处理
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic bnVvY2hvbmc6bnVvY2hvbmcyMDE3',
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
    const url = '/auth/oauth/token';
    const postdata = 'username=' + username + '&password=' + password + '&grant_type=password&scope=server&code=1234';
    return this.http.post(url, postdata, null, httpOptions);
  }
}
