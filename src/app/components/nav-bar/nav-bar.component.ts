import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
email;
show:boolean=false;
constructor(private login:LoginService) { }

  ngOnInit(): void {
    // if(localStorage.getItem('email')){
      
    //   this.email=localStorage.getItem('email');
    //   console.log(this.email);
    // }
   this.login.userEmail.subscribe(email=>this.email=email);
  }
  logout(){
    this.email=null;
    localStorage.clear();
  }
}
