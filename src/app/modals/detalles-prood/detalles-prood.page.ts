import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-prood',
  templateUrl: './detalles-prood.page.html',
  styleUrls: ['./detalles-prood.page.scss'],
})
export class DetallesProodPage implements OnInit {

  // Detalles del producto

  @Input() id: number;
  @Input() cartegoria: string;
  @Input() proovedor: string;
  @Input() presentacion: string;
  @Input() marca: string;
  @Input() activo: string;
  @Input() precio: number;
  @Input() cultivo: string;
  @Input() recomendaciones: string;
  @Input() fichaTecnica: string;
  @Input() hojaSeguridad: string;
  @Input() modoAccion: string;
  @Input() dosis: string;
  @Input() descripcion: string;
  @Input() grupo: string;
  @Input() logo: string;

  public segmentModel: string;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  segmentChanged(ev: any){
    this.segmentModel= ev.detail.value;
    console.log(ev);
    console.log(this.segmentModel);
  }

  salir(){
    console.log('Bye');
    this.dismiss();
  }
}
