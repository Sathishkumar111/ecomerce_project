import { Component } from '@angular/core';
import { AddressService } from './address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
constructor(private addressService:AddressService){}
order={customerName:'',street:'',city:'',state:'',pincode:'',note:'',doorNumber:'',address:'',email:'',mobileNumber:''};
posts:any
userId:any
data:any
addressId:any
ngOnInit() {
  let self = this;
  this.addressService.getposts().subscribe(function (response) {
    self.posts = response;
    console.log(self.posts);
  })
}
deleteAddress(id: any) {
  console.log("delete product-", this.order)
  this.addressService.deleteAddress(id).subscribe(() => {
    alert('Address Delete Successfully');
    this.ngOnInit();
  });
}
placeOrder(id:any){
  this.userId=localStorage.getItem('id');
  this.addressId=localStorage.getItem('addressId');
  if(this.userId!=null){
    this.data={"user":{"id":Number(this.userId)},"address":{"id":Number(this.addressId)} }
  
this.addressService.placeOrder(this.data).subscribe(()=>{
 
  
})
}
}
}
