import { Component } from '@angular/core';
<<<<<<< HEAD
import { UserLogin } from './auth/login/components/user-login/user-login';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserLogin ,  [RouterOutlet],], 
   
  templateUrl: './app.html'
=======
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  
  templateUrl: './app.html'  
>>>>>>> ca9a3ab4796bfbbe138f55ae8a0eed2a3933a0bd
})
export class App {}