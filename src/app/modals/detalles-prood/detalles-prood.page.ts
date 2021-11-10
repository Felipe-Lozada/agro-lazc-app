import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
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
    private modalCtrl: ModalController,
    private document: DocumentViewer,
  ) {
    this.segmentModel = 'producto';
    console.log(this.segmentModel);
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss({
      dismissed: true
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

  decargarFicha() {
    const options: DocumentViewerOptions = {
      title: 'ficha_tecnica'
    };

    this.document.viewDocument(this.fichaTecnica, 'application/pdf', options);
  }

  decargarHoja() {
    const options: DocumentViewerOptions = {
      title: 'hoja_tecnica'
    };

    this.document.viewDocument(this.hojaSeguridad, 'application/pdf', options);
  }
}
