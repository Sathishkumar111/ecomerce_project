import { Component } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUp: any = [];
  UserArr: any;
  users: any;
  userId: any;
  userName: any;
  signup = { name: '', email: '', password: '', gender: '' };
  constructor(private service: SignupService) { }
  regsister() {
    this.service.login(this.signup).subscribe(() => {
      this.ngOnInit();
      this.signup = { name: '', email: '', password: '', gender: '' };
      
    })

  }
  ngOnInit() {
    let self = this;
    this.service.getSign().subscribe(function (response) {
      self.signUp = response;
      console.log(self.signUp);
    })
  }

}
