import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule }   from '@angular/router';
// import { ChartsModule } from 'ng2-charts';

import { CoreModule } from 'app/core/core.module';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';


@NgModule({
    imports: [
      CoreModule,
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
