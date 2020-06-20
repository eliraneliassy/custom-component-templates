import { Consumer1Component } from './consumer1/consumer1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Consumer2Component } from './consumer2/consumer2.component';

const routes: Routes = [
  { path: '', redirectTo: 'consumer1', pathMatch: 'full' },
  { path: 'consumer1', component: Consumer1Component },
  { path: 'consumer2', component: Consumer2Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
