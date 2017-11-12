import { NgModule } from '@angular/core';
import { RegisterComponent } from './views/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './register.routes';
import { MaterialModule } from './material.deps';
import { UserComponent } from './views/register/components/user/user.component';
import { DriverComponent } from './views/register/components/driver/driver.component';
import { CoreModule } from '../core/core.module';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';

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