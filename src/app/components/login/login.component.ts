import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;

  constructor(private fb :FormBuilder,private router:Router,private loginService:LoginService ) { }

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
    console.log(token);
   localStorage.setItem('email',token.email);
   this.loginService.nextEmail(token.email);

   this.router.navigate(['/']);

  }

}
