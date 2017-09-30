import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
// Lo dejamos preparado para la proxima version de material
import {
  MdAutocompleteModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdTooltipModule,
} from '@angular/material';
import { ToolbarComponent, ToolbarFeedbackDialog } from './components/toolbar/toolbar.component';
import { WelcomeComponent } from 'app/core/views/welcome/welcome.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from 'app/core/services/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule,
    MdAutocompleteModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdTooltipModule,
    //Componentes
    ToolbarComponent,
    ToolbarFeedbackDialog,
    WelcomeComponent
  ],
  providers: [
    AuthService
  ],
  declarations: [
    ToolbarComponent,
    ToolbarFeedbackDialog,
    WelcomeComponent,
    LoginComponent
  ]
})
export class CoreModule {};