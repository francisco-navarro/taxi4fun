import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent, ToolbarFeedbackDialog } from './components/toolbar/toolbar.component';
import { WelcomeComponent } from 'app/core/views/welcome/welcome.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from 'app/core/services/auth.service';
import { LoginService } from 'app/core/services/login.service';
import { ROUTES } from 'app/core/core.routes';
import { MaterialModule } from 'app/core/material.module';


@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    HttpModule,
  ],
  exports: [
    ToolbarComponent,
    ToolbarFeedbackDialog,
    WelcomeComponent
  ],
  providers: [
    AuthService,
    LoginService
  ],
  entryComponents: [ ToolbarFeedbackDialog ],
  declarations: [
    ToolbarComponent,
    ToolbarFeedbackDialog,
    WelcomeComponent,
    LoginComponent
  ]
})
export class CoreModule {};