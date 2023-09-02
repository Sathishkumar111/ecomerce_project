import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {private url = "http://localhost:8080/signIn";
constructor(private http: HttpClient) { }

getSign(){
  return this.http.get(this.url)
}
login(obj:any){
  return this.http.post(this.url,obj)
}
}
