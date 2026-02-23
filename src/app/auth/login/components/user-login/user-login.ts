import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
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