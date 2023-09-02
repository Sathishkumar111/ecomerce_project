import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  private url="http://localhost:8080/Items";  

  constructor(private http:HttpClient) { }
getposts(){
  return this.http.get(this.url)
}
saveItems(obj:any){
  return this.http.post(this.url,obj);
}
deleteItems(id:any){
  return this.http.delete(`${this.url}?id=${id}`);
}
editItems(id:any){
  
  return this.http.put(this.url,id);
  
}
update(id:any){
  return this.http.post(this.url,id);
}
}
