import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './auth/register/components/user-registration/user-registration';
import { UserLogin } from './auth/login/components/user-login/user-login';

export const routes: Routes = [
  { path: 'login', component: UserLogin },
  { path: 'register', component: UserRegistrationComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];