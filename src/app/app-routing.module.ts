import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhrasesComponent } from './core/pages/phrases/phrases.component';

const routes: Routes = [
  { path: '', redirectTo: 'phrases', pathMatch: 'full' },
  { path: 'phrases', component: PhrasesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
