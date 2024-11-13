import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AoPedidoDoClientePage } from './ao-pedido-do-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: AoPedidoDoClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AoPedidoDoClientePageRoutingModule {}
