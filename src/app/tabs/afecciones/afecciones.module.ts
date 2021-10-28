import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfeccionesPageRoutingModule } from './afecciones-routing.module';

import { AfeccionesPage } from './afecciones.page';
import { PipeModule } from 'src/app/pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfeccionesPageRoutingModule,
    PipeModule
  ],
  declarations: [AfeccionesPage]
})
export class AfeccionesPageModule {}
