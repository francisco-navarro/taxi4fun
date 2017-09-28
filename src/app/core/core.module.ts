import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  exports: [
    MaterialModule
  ],
  declarations: [ToolbarComponent]
})
export class CoreModule {};