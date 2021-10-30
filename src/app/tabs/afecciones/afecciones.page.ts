import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { RecomendacionPage } from '../../modals/recomendacion/recomendacion.page';
@Component({
  selector: 'app-afecciones',
  templateUrl: './afecciones.page.html',
  styleUrls: ['./afecciones.page.scss'],
})
export class AfeccionesPage implements OnInit {
  public afecciones = [
    {
      id: 1,
      tipo: 'plaga',
      nombre: 'pulgon',
      nombreTecnico: 'aphidoidea',
      descripcion: ''
    },
    {
      id: 2,
      tipo: 'plaga',
      nombre: 'fraile',
      nombreTecnico: 'macrodactylus subspinosus',
      descripcion: ''
    },
    {
      id: 3,
      tipo: 'plaga',
      nombre: 'chapulin',
      nombreTecnico: 'sphenarium purpurascens',
      descripcion: ''
    },
    {
      id: 4,
      tipo: 'plaga',
      nombre: 'trips',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    },
    {
      id: 5,
      tipo: 'plaga',
      nombre: 'gallina ciega',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    },
    {
      id: 6,
      tipo: 'plaga',
      nombre: 'araña roja',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    },
    {
      id: 7,
      tipo: 'enfermedad',
      nombre: 'roya',
      nombreTecnico: 'puccia sorghi',
      descripcion: ''
    },
    {
      id: 8,
      tipo: 'enfermedad',
      nombre: 'escaldadura',
      nombreTecnico: '',
      descripcion: ''
    },
    {
      id: 9,
      tipo: 'enfermedad',
      nombre: 'pudriciòn radical',
      nombreTecnico: 'fusarium oxysporum',
      descripcion: ''
    },
    {
      id: 10,
      tipo: 'maleza',
      nombre: 'navo',
      nombreTecnico: 'brassica rapa subsp oleifera',
      descripcion: ''
    },
    {
      id: 11,
      tipo: 'maleza',
      nombre: 'acahual',
      nombreTecnico: 'tithonia diversifolia',
      descripcion: ''
    },
    {
      id: 12,
      tipo: 'maleza',
      nombre: 'quelite',
      nombreTecnico: 'amaranthus',
      descripcion: ''
    },
    {
      id: 13,
      tipo: 'maleza',
      nombre: 'avena',
      nombreTecnico: 'avena fatua',
      descripcion: ''
    },
    {
      id: 14,
      tipo: 'maleza',
      nombre: 'chayotillo',
      nombreTecnico: 'sicyos deppei',
      descripcion: ''
    }
  ];

  public textoBuscar = '';

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private modalCtrl: ModalController
    ) { }

    async presentModal(){
      const modal = await this.modalCtrl.create({
        component: RecomendacionPage,
        mode: 'ios'
      });
      return await modal.present();
    }

  async presentAlert(nombre, nombreTecnico, descripcion) {
    const alert = await this.alertCtrl.create({
      header: nombre,
      mode: 'ios',
      subHeader: nombreTecnico,
      message: descripcion,
      buttons: [
        {
          text: 'Producto recomendado',
          handler: () => {
            console.log('Confirm Okay');
            this.presentModal();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            console.log(blah);
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }

  buscarAfecciones(e){
    console.log(e);
    this.textoBuscar = e.detail.value;
  }

  onClick(afeccion) {
    this.presentAlert(afeccion.nombre, afeccion.nombreTecnico, afeccion.descripcion);
    console.table(afeccion);
  }

}
