import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecomendacionEnfermedadesPageRoutingModule } from './recomendacion-enfermedades-routing.module';

import { RecomendacionEnfermedadesPage } from './recomendacion-enfermedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomendacionEnfermedadesPageRoutingModule
  ],
  declarations: [RecomendacionEnfermedadesPage]
})
export class RecomendacionEnfermedadesPageModule {}
