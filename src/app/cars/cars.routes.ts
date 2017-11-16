import { CarDashboardComponent } from './views/dashboard/car-dashboard.component';
import { Routes } from '@angular/router';

export const ROUTES : Routes = [
  {
    path: 'cars',
    component: CarDashboardComponent
  },
];