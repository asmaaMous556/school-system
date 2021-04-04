import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
email:string;
userEmail:BehaviorSubject<string>;
  constructor() {
    this.userEmail=new BehaviorSubject(this.email);
   }
   nextEmail(email){
     this.userEmail.next(email);
   }
}
