import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { CoreModule } from 'app/core/core.module';
import { RegisterModule } from 'app/register/register.module';


@NgModule({
    imports: [
      CoreModule,
      RegisterModule,
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
