import { Routes } from '@angular/router';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './views/login/login.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { RegisterComponent } from './views/register/register.component';
import { CallTaxiComponent } from './views/call-taxi/call-taxi.component';
import { CarsComponent } from './views/cars/cars.component';

export const ROUTES : Routes = [
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'call-taxi',
    component: CallTaxiComponent
  },
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
    path: 'register',
    component: RegisterComponent
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