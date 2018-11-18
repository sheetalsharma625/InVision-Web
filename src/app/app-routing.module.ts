import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  { path: '', redirectTo: '/switches', pathMatch: 'full' },
  { path: "switches", component: SwitchesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
