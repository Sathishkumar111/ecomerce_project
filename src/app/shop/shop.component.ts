import { Component } from '@angular/core';
import { ShopService } from './shop.service';
import { AddproductService } from '../addproduct/addproduct.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  posts: any=[] ;
  product:any
  qty=1;
  obj:any;
  userId:any;
 cartItems ={ };
  Items = { code: '', name: '', price: '', size: '', url: '' };
  constructor( private shopService:ShopService,private productService:AddproductService,private route:Router) { }
  
	ngOnInit() {
		let self = this;
		this.shopService.getposts().subscribe(function (response) {
			self.posts = response;
			console.log(self.posts);
		})
}

addCart(id:any,price:any){
  this.userId=localStorage.getItem('id')
 if(this.userId!=null){
  this.obj={"user":{"id":Number(this.userId)},"product":{"id":id},"quantity":this.qty,"totalPrice":price }
  this.shopService.cart1(this.obj).subscribe(()=> {
    alert('product add to cart successfully')
  })
 }
 else{
  this.route.navigate(['/login'])
 }
  
}


}
  

