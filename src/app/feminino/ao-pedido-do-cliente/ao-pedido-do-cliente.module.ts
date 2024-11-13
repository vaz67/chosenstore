import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AoPedidoDoClientePageRoutingModule } from './ao-pedido-do-cliente-routing.module';

import { AoPedidoDoClientePage } from './ao-pedido-do-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AoPedidoDoClientePageRoutingModule
  ],
  declarations: [AoPedidoDoClientePage]
})
export class AoPedidoDoClientePageModule {}
