import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(){this.Login()}
   display:any
   userId:any;
   Login(){
    this.userId=localStorage.getItem('id');
    if(this.userId!=null){
      this.display=true;
    }
    else{
      this.display=false;
    }
    
   }
   logOut(){
    localStorage.clear();
    window.location.reload();
   }

}
