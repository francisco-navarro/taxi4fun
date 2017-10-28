import {NgModule} from '@angular/core';
import { RegisterComponent } from './views/register/register.component';
import { RouterModule }   from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ROUTES } from 'app/register/register.routes';


@NgModule({
  imports: [
    MaterialModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [],
  declarations: [RegisterComponent]
})
export class RegisterModule {};