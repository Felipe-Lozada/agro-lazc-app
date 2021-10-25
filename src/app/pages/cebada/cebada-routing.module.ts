import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CebadaPage } from './cebada.page';

const routes: Routes = [
  {
    path: '',
    component: CebadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CebadaPageRoutingModule {}
