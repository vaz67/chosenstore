import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FemininoPage } from './feminino.page';

const routes: Routes = [
  {
    path: '',
    component: FemininoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FemininoPageRoutingModule {}
