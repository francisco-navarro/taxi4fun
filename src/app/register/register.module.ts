import {NgModule} from '@angular/core';
import { RegisterComponent } from './views/register/register.component';
import { RouterModule }   from '@angular/router';
import { ROUTES } from 'app/register/register.routes';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [],
  declarations: [RegisterComponent]
})
export class RegisterModule {};