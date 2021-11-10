import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  public isCartFull: boolean;
  public cartItems: any[];
  constructor(
    private storage: Storage,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
    this.checkCartStatus();
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  checkCartStatus(){
    this.storage.create();
    this.storage.get('cart').then(
      (cartItem: any) => {
        if(cartItem.length > 0) {
          this.cartItems = cartItem;
          this.isCartFull = true;
          console.table({cartStatus: this.isCartFull});
        } else{
          this.isCartFull = false;
          console.table({cartStatus: this.isCartFull});
        }
      }
    ).catch ( err => {
      this.isCartFull = false;
      console.table({cartStatus: this.isCartFull, err});
    });
  }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  comprar(){
    console.log('a comprar');
  }

  vaciarCarrito(){
    console.log('Carrito Vacio');
    this.storage.remove('cart');
  }

}
