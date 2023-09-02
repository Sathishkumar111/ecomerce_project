import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }
  private  link= "http://localhost:8080/Address";

  private  url= "http://localhost:8080/order";
  getposts() {
    return this.http.get(`${this.link}?userId=${localStorage.getItem('id')}`)
  }
  deleteAddress(id:any){
    return this.http.delete(`${this.link}?id=${id}`);
  }
  placeOrder(obj:any,){
    return this.http.post(`${this.link}?userId=${localStorage.getItem('id')}`,obj)
  }
}
