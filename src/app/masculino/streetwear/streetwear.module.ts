import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreetwearPageRoutingModule } from './streetwear-routing.module';

import { StreetwearPage } from './streetwear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreetwearPageRoutingModule
  ],
  declarations: [StreetwearPage]
})
export class StreetwearPageModule {}
