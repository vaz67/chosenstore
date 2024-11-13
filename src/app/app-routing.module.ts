import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'feminino', loadChildren: () => import('./categories/feminino/feminino.module').then(m => m.FemininoPageModule) },
  { path: 'masculino', loadChildren: () => import('./categories/masculino/masculino.module').then(m => m.MasculinoPageModule) },
  { path: 'infantil', loadChildren: () => import('./categories/infantil/infantil.module').then(m => m.InfantilPageModule) },
  { path: 'product-detail/:id', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
