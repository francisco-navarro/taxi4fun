import { Routes } from '@angular/router';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './views/login/login.component';
import { WelcomeComponent } from './views/welcome/welcome.component';

export const ROUTES : Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
    // Añadir guarda
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];