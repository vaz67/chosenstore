import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfantilPageRoutingModule } from './infantil-routing.module';

import { InfantilPage } from './infantil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfantilPageRoutingModule
  ],
  declarations: [InfantilPage]
})
export class InfantilPageModule {}
