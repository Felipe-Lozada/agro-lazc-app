import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CultivoInfoPageRoutingModule } from './cultivo-info-routing.module';

import { CultivoInfoPage } from './cultivo-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CultivoInfoPageRoutingModule
  ],
  declarations: [CultivoInfoPage]
})
export class CultivoInfoPageModule {}
