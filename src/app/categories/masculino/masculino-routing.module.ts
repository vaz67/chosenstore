import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasculinoPage } from './masculino.page';

const routes: Routes = [
  {
    path: '',
    component: MasculinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasculinoPageRoutingModule {}
