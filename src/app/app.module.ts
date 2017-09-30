import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
// import { ChartsModule } from 'ng2-charts';

import { CoreModule } from 'app/core/core.module';
import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
import { AuthService } from 'app/core/services/auth.service';


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
    //Services
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
