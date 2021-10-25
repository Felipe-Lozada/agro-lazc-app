import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CultivoInfoPage } from './cultivo-info.page';

const routes: Routes = [
  {
    path: '',
    component: CultivoInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CultivoInfoPageRoutingModule {}
