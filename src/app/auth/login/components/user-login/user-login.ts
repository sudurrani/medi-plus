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

  email: string = '';
  password: string = '';

  onLogin() {
    if (this.email && this.password) {
      alert('Login Successful');
    } else {
      alert('Please fill all fields');
    }
  }

}