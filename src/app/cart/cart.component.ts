import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService) { }
  posts: any;
  cartItems: any;
  userId: any;
  qty = 1;
   cartTotal=0;
   totalPrice=0;
   tax=0;
  ngOnInit() {
    let self = this;
    this.cartService.getposts().subscribe(function (response) {
      self.cartItems = response;


      console.log(self.cartItems);
    })

  }
  remove(id: any) {
    this.cartService.remove(id).subscribe(() => {
      this.ngOnInit();
    });
  }
  removeAll() {

    this.cartService.removeAll().subscribe(() => {
      alert('Product deleted Successfully');
      this.ngOnInit();
    });
  }
  increase(price: any, qty: any, id: any) {
    qty++;
    let totalAmount = qty * price;
    let tax = Math.round(totalAmount * 0.09);
    let cartTotal=totalAmount+tax;
    let obj = {totalPrice:price,totalAmount:totalAmount,tax:tax,id:id,quantity:qty,cartTotal:cartTotal}
    this.cartService.increaseDecrease(obj).subscribe(() => {
      this.ngOnInit();
    });
  }

  decrease(price: any, qty: any, id: any) {
    qty--;
    let totalAmount = qty * price;
    let tax= Math.round(totalAmount * 0.09);
    let cartTotal=totalAmount+tax;
    let obj = {totalPrice:totalAmount,tax:tax,id:id,quantity:qty,cartTotal:cartTotal}
    this.cartService.increaseDecrease(obj).subscribe(() => {
      this.ngOnInit();
    });
  }
}
