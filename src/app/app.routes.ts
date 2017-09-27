import { Routes } from '@angular/router';
import { WelcomeComponent } from 'app/views/welcome/welcome.component';

export const ROUTES : Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
    // Añadir guarda
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];