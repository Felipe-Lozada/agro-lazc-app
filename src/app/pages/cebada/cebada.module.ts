import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CebadaPageRoutingModule } from './cebada-routing.module';

import { CebadaPage } from './cebada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CebadaPageRoutingModule
  ],
  declarations: [CebadaPage]
})
export class CebadaPageModule {}
