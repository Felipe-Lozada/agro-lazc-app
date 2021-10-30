import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recomendacion',
  templateUrl: './recomendacion.page.html',
  styleUrls: ['./recomendacion.page.scss'],
})
export class RecomendacionPage implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  dismiss(){
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  ngOnInit() {
  }

  segmentChanged(e){
    console.log(e);
  }

  salir(){
    console.log('gusbai');
    this.dismiss();
  }

  hacerPedido(){}
}
