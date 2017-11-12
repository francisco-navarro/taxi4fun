import { AppComponent } from './app.component';
import { CoreModule } from 'app/core/core.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RegisterModule } from 'app/register/register.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

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
