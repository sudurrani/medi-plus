import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-registration.html',
  styleUrls: ['./user-registration.css']
})
export class UserRegistrationComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  register() {
    console.log('User Data:', this.user);
    alert('Registration Successful!');
  }

}