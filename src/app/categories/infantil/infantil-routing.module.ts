import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfantilPage } from './infantil.page';

const routes: Routes = [
  {
    path: '',
    component: InfantilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfantilPageRoutingModule {}
