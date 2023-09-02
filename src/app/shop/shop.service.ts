import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private url="http://localhost:8080/Items";
  private cart="http://localhost:8080/cart";  

constructor(private http:HttpClient) { }
getposts(){
return this.http.get(this.url)
}
cart1(obj:any){

return this.http.post(this.cart,obj)
}
}
