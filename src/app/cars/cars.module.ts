import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './cars.routes';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarComponent } from './components/car/car.component';
import { MaterialModule } from './material.deps';
import { CarDashboardComponent } from './views/dashboard/car-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES)
  ],
  entryComponents: [],
  declarations: [
    CarDashboardComponent,
    CarComponent,
    CarListComponent
  ]
})
export class CarsModule { }
