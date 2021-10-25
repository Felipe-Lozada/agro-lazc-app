import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [{
      path: 'home',
      loadChildren:() => import('../tabs/home/home.module').then(m => m.HomePageModule)
    },
    {
      path: 'afecciones',
      loadChildren: () => import('../tabs/afecciones/afecciones.module').then(m => m.AfeccionesPageModule)
    },
    {
      path: 'productos',
      loadChildren: () => import('../tabs/productos/productos.module').then(m => m.ProductosPageModule)
    },
    {
      path: 'ayuda',
      loadChildren: () => import('../tabs/ayuda/ayuda.module').then(m => m.AyudaPageModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
