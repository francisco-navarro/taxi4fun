import { MaterialModule } from './material.deps';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDashboardComponent } from './views/dashboard/car-dashboard.component';
import { CarComponent } from './components/car/car.component';
import { ROUTES } from './cars.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES)
  ],
  entryComponents: [
    CarComponent
  ],
  declarations: [
    CarDashboardComponent,
    CarComponent
  ]
})
export class CarsModule { }
