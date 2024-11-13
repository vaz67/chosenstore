import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FemininoPageRoutingModule } from './feminino-routing.module';

import { FemininoPage } from './feminino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FemininoPageRoutingModule
  ],
  declarations: [FemininoPage]
})
export class FemininoPageModule {}
