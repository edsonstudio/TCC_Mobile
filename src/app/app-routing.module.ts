import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardAccount } from './services/User/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [GuardAccount]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [GuardAccount]
  },
  {
    path: 'home-logado',
    loadChildren: () => import('./home-logado/home-logado.module').then( m => m.HomeLogadoPageModule)
  },
  {
    path: 'novidades',
    loadChildren: () => import('./novidades/novidades.module').then( m => m.NovidadesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
