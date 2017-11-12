import {NgModule} from '@angular/core';
import { RegisterComponent } from './views/register/register.component';
import { RouterModule }   from '@angular/router';
import { ROUTES } from 'app/register/register.routes';
import { MaterialModule } from './material.deps';
import { UserComponent } from './views/register/components/user/user.component';
import { DriverComponent } from './views/register/components/driver/driver.component';
import { CoreModule } from 'app/core/core.module';

@NgModule({
  imports: [
    MaterialModule,
    CoreModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [],
  declarations: [
    RegisterComponent,
    UserComponent,
    DriverComponent
  ]
})
export class RegisterModule {};