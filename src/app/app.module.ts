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

@NgModule({
  declarations: [AppComponent, ProductoPipe],
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
