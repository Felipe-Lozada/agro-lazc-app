import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'cultivo-info',
    loadChildren: () => import('./pages/cultivo-info/cultivo-info.module').then( m => m.CultivoInfoPageModule)
  },
  {
    path: 'cebada',
    loadChildren: () => import('./pages/cebada/cebada.module').then( m => m.CebadaPageModule)
  },
  {
    path: 'recomendacion-enfermedades',
    loadChildren: () =>
    import('./modals/recomendacion-enfermedades/recomendacion-enfermedades.module')
    .then( m => m.RecomendacionEnfermedadesPageModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./modals/privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./modals/acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./modals/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./modals/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pages/pagos/pagos.module').then( m => m.PagosPageModule)
  },
  {
    path: 'direcciones',
    loadChildren: () => import('./pages/direcciones/direcciones.module').then( m => m.DireccionesPageModule)
  },
  {
    path: 'chekout',
    loadChildren: () => import('./pages/chekout/chekout.module').then( m => m.ChekoutPageModule)
  }
  // ,{
  //   path: 'detalles-prood',
  //   loadChildren: () => import('./modals/detalles-prood/detalles-prood.module').then( m => m.DetallesProodPageModule)
  // },
  // {
  //   path: 'carrito',
  //   loadChildren: () => import('./modals/carrito/carrito.module').then( m => m.CarritoPageModule)
  // },
  // ,{
  //   path: 'recomendacion',
  //   loadChildren: () => import('./modals/recomendacion/recomendacion.module').then(m => m.RecomendacionPageModule),
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
