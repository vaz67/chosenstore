import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreetwearPage } from './streetwear.page';

const routes: Routes = [
  {
    path: '',
    component: StreetwearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreetwearPageRoutingModule {}
