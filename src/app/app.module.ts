import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { RegisterModule } from './register/register.module';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { CarsModule } from './cars/cars.module';

@NgModule({
    imports: [
      CoreModule,
      RegisterModule,
      CarsModule,
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
