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
}
