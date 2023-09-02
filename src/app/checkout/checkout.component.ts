import { Component } from '@angular/core';
import {NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutService } from './checkout.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal,private orderservice:CheckoutService,private route:Router){}
  order={customerName:'',street:'',city:'',state:'',pincode:'',note:'',doorNumber:'',address:'',email:'',mobileNumber:'',"user":{"id":`${localStorage.getItem('id')}`}};
  posts:any
  address:any
  addressId:any
  ngOnInit() {
		let self = this;
		this.orderservice.getposts().subscribe(function (response) {
			self.posts = response;
			console.log(self.posts);
		})
	}
  placeOrder() {
		console.log("address-", this.order);
		this.orderservice.orderItems(this.order).subscribe((address) => {
			this.address=address;
			this.addressId=this.address.id;
			localStorage.setItem('addressId',this.addressId)
			this.ngOnInit();
			this.order={customerName:'',street:'',city:'',state:'',pincode:'',note:'',doorNumber:'',address:'',email:'',mobileNumber:'',"user":{"id":`${localStorage.getItem('id')}`}};
			this.route.navigate(['/address'])
		});

	}

}
