import { Routes } from '@angular/router';
import { UserLogin } from './auth/login/components/user-login/user-login';
import { ForgotPassword } from './auth/forgot-password/components/forgot-password/forgot-password';
import { UserRegistrationComponent } from './auth/register/components/user-registration/user-registration';

export const routes: Routes = [
  { path: 'login', component: UserLogin },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'forgot-password', component: ForgotPassword },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];