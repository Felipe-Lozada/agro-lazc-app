import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChekoutPageRoutingModule } from './chekout-routing.module';

import { ChekoutPage } from './chekout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChekoutPageRoutingModule
  ],
  declarations: [ChekoutPage]
})
export class ChekoutPageModule {}
