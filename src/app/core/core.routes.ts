import { Routes } from '@angular/router';
import { WelcomeComponent } from 'app/core/views/welcome/welcome.component';
import { LoginComponent } from 'app/core/views/login/login.component';
import { AuthService } from 'app/core/services/auth.service';

export const ROUTES : Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate:[ AuthService ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];