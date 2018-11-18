import { NgModule } from '@angular/core';
import {
  MatProgressBarModule,
  MatButtonModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';


@NgModule({
  exports: [
    MatProgressBarModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }