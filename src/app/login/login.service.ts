import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url="http://localhost:8080/signIn/byEmailAndPassword"
  private logins="http://localhost:8080/signIn"
  constructor(private http: HttpClient) { }
  
  login(obj:any){
    return this.http.post(this.url,obj)
  }
}
