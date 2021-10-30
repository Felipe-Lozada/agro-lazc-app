import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recomendacion',
  templateUrl: './recomendacion.page.html',
  styleUrls: ['./recomendacion.page.scss'],
})
export class RecomendacionPage implements OnInit {

  segmentModel='producto';

  constructor(private modalCtrl: ModalController) {}

  dismiss(){
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  ngOnInit() {
  }

  segmentChanged(e){
    this.segmentModel= e.detail.value;
    console.log(this.segmentModel);
  }

  salir(){
    console.log('gusbai');
    this.dismiss();
  }

  hacerPedido(){}
}
