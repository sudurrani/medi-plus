import { Routes } from '@angular/router';
import { UserLogin } from './auth/login/components/user-login/user-login';

export const routes: Routes = [
  {
    path: '',
    component: UserLogin
  }
];
