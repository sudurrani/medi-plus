import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-registration.html',
  styleUrls: ['./user-registration.css']
})
export class UserRegistrationComponent {

  // Object jahan form ka data save hoga
  user = {
    fullName: '',
    pharmacyName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  // Button click par ye function chalega
  register() {
    console.log('--- Naya User Data ---');
    console.log('Naam:', this.user.fullName);
    console.log('Pharmacy:', this.user.pharmacyName);
    console.log('Email:', this.user.email);
    console.log('Phone:', this.user.phone);
    console.log('Password:', this.user.password);
    
    // Alert sirf confirm karne ke liye
    alert('Data console mein check karein (F12)!');
  }
}