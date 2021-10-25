import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfeccionesPageRoutingModule } from './afecciones-routing.module';

import { AfeccionesPage } from './afecciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfeccionesPageRoutingModule
  ],
  declarations: [AfeccionesPage]
})
export class AfeccionesPageModule {}
