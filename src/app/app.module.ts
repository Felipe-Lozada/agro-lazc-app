import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { ComponentModule } from '../app/components/component.module';
import { PipeModule } from './pipes/pipe/pipe.module';
import { ProductoPipe } from './pipes/producto.pipe';
import { IonicStorageModule } from '@ionic/storage-angular';
import { CommonModule } from '@angular/common';

import { RecomendacionPage } from './modals/recomendacion/recomendacion.page';
import { CarritoPage } from './modals/carrito/carrito.page';
import { DetallesProodPage } from './modals/detalles-prood/detalles-prood.page';

@NgModule({
  declarations: [AppComponent, ProductoPipe, RecomendacionPage, CarritoPage, DetallesProodPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ScreenOrientation],
  bootstrap: [AppComponent],
})
export class AppModule {}
