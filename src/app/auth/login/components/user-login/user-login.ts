import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-login.html',
  styleUrls: ['./user-login.css']
})
export class UserLogin {
  
  loginObj: any = {
    email: '',
    password: ''
  };

  onLogin() {
    
    console.log("Login Details:", this.loginObj);
    
    if(this.loginObj.email && this.loginObj.password) {
      alert("Logging in with: " + this.loginObj.email);
    } else {
      alert("Bhai, pehle email aur password toh likho!");
    }
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    console.log('Forgot Password clicked');
  }

  onRegister(event: Event) {
    event.preventDefault();
    console.log('Register Now clicked');
  }
}