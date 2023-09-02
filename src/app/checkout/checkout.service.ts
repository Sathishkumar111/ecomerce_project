import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) {}
  private  link= "http://localhost:8080/Address";


  getposts() {
    return this.http.get(`${this.link}?userId=${localStorage.getItem('id')}`)
  }
  orderItems(obj: any) {
    return this.http.post(this.link, obj);
  }
}
