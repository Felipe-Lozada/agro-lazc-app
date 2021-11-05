import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recomendacion',
  templateUrl: './recomendacion.page.html',
  styleUrls: ['./recomendacion.page.scss'],
})
export class RecomendacionPage implements OnInit {

  segmentModel='producto';

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {}

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '<ion-icon name="checkmark"></ion-icon> Producto agregado al carrito',
      cssClass: 'information-message',
      duration: 2000,
      mode: 'ios',
      color: 'secondary',
    });
    toast.present();
  }

  dismiss(){
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  ngOnInit() {
  }

  segmentChanged(ev: any){
    this.segmentModel= ev.detail.value;
    console.log(ev);
    console.log(this.segmentModel);
  }

  salir(){
    this.dismiss();
    console.log('gusbai');
  }

  hacerPedido(){}

  addCart(){
    this.dismiss();
    this.presentToast();
    console.log('Producto añadido al carrito ');
  }
}
