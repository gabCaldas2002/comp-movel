import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'filmes',
    loadChildren: () => import('./view/filmes/filmes.module').then( m => m.FilmesPageModule)
  },
  {
    path: 'filmes-detalhes',
    loadChildren: () => import('./view/filmes-detalhes/filmes-detalhes.module').then( m => m.FilmesDetalhesPageModule)
  },
  {
    path: 'omdbapi',
    loadChildren: () => import('./model/services/omdbapi/omdbapi.module').then( m => m.OmdbapiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
