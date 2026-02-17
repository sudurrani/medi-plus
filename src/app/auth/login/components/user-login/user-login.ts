import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.html',
  styleUrls: ['./user-login.css']
})
export class UserLogin {

  username: string = '';
  password: string = '';

  login(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    alert('Login clicked');
  }

}
