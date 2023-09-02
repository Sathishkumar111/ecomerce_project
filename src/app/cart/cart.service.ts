import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url="http://localhost:8080/cart";  
  private clear="http://localhost:8080/cart/deleteCartItemAngular";
  
  constructor(private http:HttpClient) { }
  getposts(){
  return this.http.get(this.url)
  }
  remove(id:any){
  return this.http.delete(`${this.url}?id=${id}`);
  }
  removeAll(){
  return this.http.delete(`${this.clear}`);
  }
  increaseDecrease(obj:any){
  return this.http.put(this.url,obj)
  }
}
