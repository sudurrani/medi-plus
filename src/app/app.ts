import { Component } from '@angular/core';
import { UserLogin } from './auth/login/components/user-login/user-login';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserLogin ,  [RouterOutlet],], 
   
  templateUrl: './app.html'
})
export class App {}