import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfeccionesPage } from './afecciones.page';

const routes: Routes = [
  {
    path: '',
    component: AfeccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfeccionesPageRoutingModule {}
