import { Component } from '@angular/core';
import { UserLogin } from './auth/login/components/user-login/user-login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserLogin],   // ✅ YAHAN IMPORT KARNA ZAROORI HAI
  templateUrl: './app.html'
})
export class App {}