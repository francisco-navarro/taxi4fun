import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ToolbarComponent, ToolbarFeedbackDialog } from './components/toolbar/toolbar.component';
import { WelcomeComponent } from 'app/core/views/welcome/welcome.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from 'app/core/services/auth.service';
import { LoginService } from 'app/core/services/login.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    MaterialModule
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule,
    //Componentes
    ToolbarComponent,
    ToolbarFeedbackDialog,
    WelcomeComponent
  ],
  providers: [
    AuthService,
    LoginService
  ],
  declarations: [
    ToolbarComponent,
    ToolbarFeedbackDialog,
    WelcomeComponent,
    LoginComponent
  ]
})
export class CoreModule {};