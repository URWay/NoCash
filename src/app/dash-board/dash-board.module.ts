import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './dash-board.component';
import { MenuComponent } from './../menu/menu.component';

@NgModule({
    declarations: [
      DashBoardComponent,
      MenuComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      BrowserModule,
      MatCardModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      FormsModule,
      HttpModule
    ],
    providers: [],
    bootstrap: [DashBoardComponent],
    exports:[
      DashBoardComponent
    ]
  })
  
  export class DashBoardModule {
  
  }