import { Routes } from '@angular/router';
<<<<<<< HEAD
import { UserLogin } from './auth/login/components/user-login/user-login';
import { ForgotPassword } from './auth/forgot-password/components/forgot-password/forgot-password';

export const routes: Routes = [
  { path: 'login', component: UserLogin },
  { path: 'forgot-password', component: ForgotPassword },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
=======
import { UserRegistrationComponent } from './auth/register/components/user-registration/user-registration';
import { UserLogin } from './auth/login/components/user-login/user-login';

export const routes: Routes = [
  { path: 'login', component: UserLogin },
  { path: 'register', component: UserRegistrationComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
>>>>>>> ca9a3ab4796bfbbe138f55ae8a0eed2a3933a0bd
];