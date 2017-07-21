import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { ProfileComponent } from './views/profile/profile.component';
import { InvoicesComponent } from './views/invoices/invoices.component';
import { ToolbarComponent, ToolbarFeedbackDialog } from './components/toolbar/toolbar.component';
import { DriversComponent } from './views/drivers/drivers.component';
import { CarsComponent } from './views/cars/cars.component';

import { stubBackendProvider } from './stub-backend/stub-backend.provider';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { DriversService } from "app/services/drivers.service";
import { DriverDetailComponent } from './views/drivers/components/driver-detail/driver-detail.component';


@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      MaterialModule,
      MdNativeDateModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
        {
          path: 'profile',
          component: ProfileComponent
        },
        {
          path: 'welcome',
          component: WelcomeComponent
        },
        {
          path: 'invoices',
          component: InvoicesComponent
        },
        {
          path: 'drivers',
          component: DriversComponent
        },
        {
          path: 'cars',
          component: CarsComponent
        },
        {
          path: '',
          redirectTo: 'welcome',
          pathMatch: 'full'
        }
      ]),
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProfileComponent,
    InvoicesComponent,
    ToolbarComponent,
    ToolbarFeedbackDialog,
    DriversComponent,
    CarsComponent,
    DriverDetailComponent,
  ],
  entryComponents: [ToolbarFeedbackDialog],
  providers: [
    stubBackendProvider,
    MockBackend,
    BaseRequestOptions,
    DriversService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
