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
    path: 'recomendacion',
    loadChildren: () => import('./modals/recomendacion/recomendacion.module')
    .then (m =>  m.RecomendacionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
