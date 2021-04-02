import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
email:string;
constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      
      this.email=localStorage.getItem('email');
      console.log(this.email);
    }
   
  }
  logout(){
    localStorage.clear();
  }
}
