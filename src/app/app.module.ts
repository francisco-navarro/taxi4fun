import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
// import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
import { WelcomeComponent } from './views/welcome/welcome.component';

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      MaterialModule,
      MdNativeDateModule,
      ReactiveFormsModule,
      // ChartsModule,
      RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
