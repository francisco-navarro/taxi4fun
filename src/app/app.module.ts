import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';


import { AppRoutesModule  } from './app-routes';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        {
          path: 'profile',
          component: ProfileComponent
        },
        {
          path: 'welcome',
          component: WelcomeComponent
        }
      ])
  ],
  declarations: [
    WelcomeComponent,
    ProfileComponent,
    InvoicesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
