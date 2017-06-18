import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ToolbarComponent, ToolbarFeedbackDialog } from './components/toolbar/toolbar.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { CarsComponent } from './components/cars/cars.component';

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
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
      ])
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
  ],
  entryComponents: [ToolbarFeedbackDialog],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
