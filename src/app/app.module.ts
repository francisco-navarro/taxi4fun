import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { WelcomeComponent } from './components/welcome.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
  //   RouterModule.forRoot([
  //     {
  //       path: 'detail/:id',
  //       component: HeroDetailComponent
  //     },
  //     {
  //       path: 'heroes',
  //       component: HeroesComponent
  //     },
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/dashboard',
  //       pathMatch: 'full'
  //     }
  //   ])
  ],
  declarations: [
    WelcomeComponent
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
