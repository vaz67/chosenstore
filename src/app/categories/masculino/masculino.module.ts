import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasculinoPageRoutingModule } from './masculino-routing.module';

import { MasculinoPage } from './masculino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasculinoPageRoutingModule
  ],
  declarations: [MasculinoPage]
})
export class MasculinoPageModule {}
