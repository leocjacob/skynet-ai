import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MundakayamComponent } from './pages/mundakayam/mundakayam.component';
import { KannimalaComponent } from './pages/kannimala/kannimala.component';
import { ManimalaComponent } from './pages/manimala/manimala.component';

const routes: Routes = [
  { path: 'mundakayam', component: MundakayamComponent },
  { path: 'kannimala', component: KannimalaComponent },
  { path: 'manimala', component: ManimalaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
