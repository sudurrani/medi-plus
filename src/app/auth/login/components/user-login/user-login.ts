import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule ,RouterLink ],
  
  templateUrl: './user-login.html',
  styleUrls: ['./user-login.css']
})
export class UserLogin {

 
   onLogin() {
  alert('Login button clicked ');
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