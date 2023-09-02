import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginUser = { password: '', email: '' };
  login: any;
  UserArr: any;
  users: any = [];
  userId: any;
  userName: any;
  constructor(private logservice: LoginService,private route:Router) { }

  logIn() {
    this.logservice.login(this.LoginUser).subscribe((user) => {
      console.log(user);
      this.UserArr = user;
      this.userId = this.UserArr.id;
      this.userName = this.UserArr.name;
      localStorage.setItem('name', this.userName);
      localStorage.setItem('id', this.userId);
      this.LoginUser = { password: '', email: '' };
      window.location.reload();
      this.route.navigate(['/shop'])
    })
  }
}
