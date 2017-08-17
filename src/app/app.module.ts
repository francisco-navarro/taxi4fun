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
import { ToolbarComponent, ToolbarFeedbackDialog } from './components/toolbar/toolbar.component';

import { ROUTES } from './app.routes';

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
    LoginComponent
  ],
  entryComponents: [ToolbarFeedbackDialog],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
