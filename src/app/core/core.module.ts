import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent, ToolbarFeedbackDialog } from './components/toolbar/toolbar.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { ROUTES } from './core.routes';
import { MaterialModule } from './material.deps';
import { ContentComponent } from './components/content/content.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';


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
    WelcomeComponent,
    ContentComponent
  ],
  providers: [
    AuthService,
    LoginService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  entryComponents: [ ToolbarFeedbackDialog ],
  declarations: [
    ToolbarComponent,
    ToolbarFeedbackDialog,
    WelcomeComponent,
    LoginComponent,
    ContentComponent
  ]
})
export class CoreModule {};