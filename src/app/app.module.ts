import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
// import { ChartsModule } from 'ng2-charts';

import { CoreModule } from 'app/core/core.module';
import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';


@NgModule({
    imports: [
      CoreModule,
      BrowserModule,
      RouterModule,
      RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
