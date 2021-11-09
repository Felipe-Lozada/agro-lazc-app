import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesProodPageRoutingModule } from './detalles-prood-routing.module';

import { DetallesProodPage } from './detalles-prood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesProodPageRoutingModule
  ],
  declarations: [DetallesProodPage]
})
export class DetallesProodPageModule {}
