import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Rota da página inicial da aplicação 

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  // Rota da página "Inicio"
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
    //Rota para página sobre
  {
    path: 'sobre',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  // Rota pra listar 
  {
    path:'usuario',
    loadChildren: () => import('./users/list/list.module').then( m => m.ListPageModule)
  },

  // Rota para a página "e404"
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  //Rota para rotas inexsistentes - Deve ser sempre a última rota

  {
    path: '**',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
