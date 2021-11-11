import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChekoutPage } from './chekout.page';

const routes: Routes = [
  {
    path: '',
    component: ChekoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChekoutPageRoutingModule {}
