import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from './material.deps';
import { ROUTES } from './register.routes';
import { DriverComponent } from './views/register/components/driver/driver.component';
import { UserComponent } from './views/register/components/user/user.component';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [],
  declarations: [
    RegisterComponent,
    UserComponent,
    DriverComponent
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class RegisterModule {};