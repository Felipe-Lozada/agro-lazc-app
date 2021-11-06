import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  public isCartFull: boolean;
  public cartItems: any[];
  constructor(private storage: Storage) {}

  checkCartStatus(){
    this.storage.create();
    this.storage.get('cart').then(
      (cartItem: any) => {
        if(cartItem) {
          this.cartItems = cartItem;
          this.isCartFull = true;
          console.log({cartStatus: this.isCartFull});
        } else {
          this.isCartFull = false;
          console.log({cartStatus: this.isCartFull});
        }
      }
    ).catch ( err => {
      this.isCartFull = false;
      console.log({cartStatus: this.isCartFull});
    });
  }

  ngOnInit() {
  }

}
