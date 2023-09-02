import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddProduct2Component } from './add-product2/add-product2.component';
import { AddProduct3Component } from './add-product3/add-product3.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },{path:'addproduct',component:AddproductComponent}, { path: 'shop', component: ShopComponent }, { path: 'product', component: ProductsingleComponent }, { path: 'checkout', component: CheckoutComponent }, { path: 'cart', component: CartComponent }, { path: 'dashboard', component: DashboardComponent }, { path: 'order', component: OrdersComponent }, { path: 'address', component: AddressComponent }, { path: 'profile', component: ProfileDetailsComponent }, { path: 'login', component:LoginComponent }, { path: 'signup', component: SignupComponent },{path:'address',component:AddressComponent},{path:'add-product2',component:AddProduct2Component},{path:'addproduct3',component:AddProduct3Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
