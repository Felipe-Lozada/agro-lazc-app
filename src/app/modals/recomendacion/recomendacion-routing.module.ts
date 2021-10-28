import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendacionPage } from './recomendacion.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendacionPageRoutingModule {}
