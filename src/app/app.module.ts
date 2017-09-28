import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from '@angular/material';

import { CoreModule } from 'app/core/core.module';
import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
import { WelcomeComponent } from './views/welcome/welcome.component';

@NgModule({
    imports: [
      BrowserModule,
      CoreModule,
      FormsModule,
      HttpModule,
      ReactiveFormsModule,
      ChartsModule,
      MaterialModule,
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
