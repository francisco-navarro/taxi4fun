import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { ToolbarComponent, ToolbarFeedbackDialog } from './components/toolbar/toolbar.component';
import { ROUTES } from './core.routes';
import { MaterialModule } from './material.deps';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { LoginComponent } from './views/login/login.component';
import { WelcomeComponent } from './views/welcome/welcome.component';


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