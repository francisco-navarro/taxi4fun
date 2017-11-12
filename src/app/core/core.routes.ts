import { Routes } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';
import { LoginComponent } from 'app/core/views/login/login.component';
import { WelcomeComponent } from 'app/core/views/welcome/welcome.component';

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