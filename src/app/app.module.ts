import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './views/login/login.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { RegisterComponent } from './views/register/register.component';
import { ToolbarComponent, ToolbarFeedbackDialog } from './components/toolbar/toolbar.component';

import { ROUTES } from './app.routes';
import { DriverComponent } from './views/register/components/driver/driver.component';
import { UserComponent } from './views/register/components/user/user.component';
import { PaymentComponent } from './views/register/components/payment/payment.component';
import { CallTaxiComponent } from './views/call-taxi/call-taxi.component';
import { CarDashboardComponent } from './views/cars/car-dashboard.component';
import { CarComponent } from './views/cars/components/car/car.component';
import { StatsComponent } from './views/cars/components/stats/stats.component';
import { ListComponent } from './views/cars/components/list/list.component';

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      MaterialModule,
      MdNativeDateModule,
      ReactiveFormsModule,
      RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    AppComponent,
    ProfileComponent,
    WelcomeComponent,
    ToolbarComponent,
    ToolbarFeedbackDialog,
    LoginComponent,
    RegisterComponent,
    DriverComponent,
    UserComponent,
    PaymentComponent,
    CallTaxiComponent,
    CarDashboardComponent,
    CarComponent,
    StatsComponent,
    ListComponent
  ],
  entryComponents: [
    CarComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
