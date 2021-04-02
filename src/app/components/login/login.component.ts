import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;

  constructor(private fb :FormBuilder ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['',[Validators.required,Validators.minLength(6)]],

    })
    this.loginForm.get('email').errors
  }

 get getEmail(){
 return  this.loginForm.get('email');
  }
 get getPassword(){
   return  this.loginForm.get('password');
  }

  login(token){
    console.log(token)
   localStorage.setItem('email',token.email)
  }

}
