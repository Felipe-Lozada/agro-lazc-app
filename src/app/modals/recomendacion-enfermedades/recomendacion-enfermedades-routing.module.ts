import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendacionEnfermedadesPage } from './recomendacion-enfermedades.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendacionEnfermedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendacionEnfermedadesPageRoutingModule {}
