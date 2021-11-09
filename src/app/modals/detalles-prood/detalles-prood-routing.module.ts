import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesProodPage } from './detalles-prood.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesProodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesProodPageRoutingModule {}
