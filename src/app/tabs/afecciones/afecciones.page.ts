import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-afecciones',
  templateUrl: './afecciones.page.html',
  styleUrls: ['./afecciones.page.scss'],
})
export class AfeccionesPage implements OnInit {
  public afecciones = [
    {
      id: 1,
      nombre: 'pulgon',
      nombreTecnico: 'aphidoidea',
      descripcion: ''
    },
    {
      id: 2,
      nombre: 'fraile',
      nombreTecnico: 'macrodactylus subspinosus',
      descripcion: ''
    },
    {
      id: 3,
      nombre: 'chapulin',
      nombreTecnico: 'sphenarium purpurascens',
      descripcion: ''
    },
    {
      id: 4,
      nombre: 'trips',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    },
    {
      id: 5,
      nombre: 'gallina ciega',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    },
    {
      id: 6,
      nombre: 'araña roja',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    },
    {
      id: 7,
      nombre: 'roya',
      nombreTecnico: 'puccia sorghi',
      descripcion: ''
    },
    {
      id: 8,
      nombre: 'escaldadura',
      nombreTecnico: '',
      descripcion: ''
    },
    {
      id: 9,
      nombre: 'pudriciòn radical',
      nombreTecnico: 'fusarium oxysporum',
      descripcion: ''
    },
    {
      id: 10,
      nombre: 'navo',
      nombreTecnico: 'brassica rapa subsp oleifera',
      descripcion: ''
    },
    {
      id: 11,
      nombre: 'acahual',
      nombreTecnico: 'tithonia diversifolia',
      descripcion: ''
    },
    {
      id: 12,
      nombre: 'quelite',
      nombreTecnico: 'amaranthus',
      descripcion: ''
    },
    {
      id: 13,
      nombre: 'avena',
      nombreTecnico: 'avena fatua',
      descripcion: ''
    },
    {
      id: 14,
      nombre: 'chayotillo',
      nombreTecnico: 'sicyos deppei',
      descripcion: ''
    }
  ];
  public plagas = [
    {
      id: 1,
      nombre: 'pulgon',
      nombreTecnico: 'aphidoidea',
      descripcion: ''
    },
    {
      id: 2,
      nombre: 'fraile',
      nombreTecnico: 'macrodactylus subspinosus',
      descripcion: ''
    },
    {
      id: 3,
      nombre: 'chapulin',
      nombreTecnico: 'sphenarium purpurascens',
      descripcion: ''
    },
    {
      id: 4,
      nombre: 'trips',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    },
    {
      id: 5,
      nombre: 'gallina ciega',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    },
    {
      id: 6,
      nombre: 'araña roja',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    }
  ];
  public enfermedades = [
    {
      id: 1,
      nombre: 'roya',
      nombreTecnico: 'puccia sorghi',
      descripcion: ''
    },
    {
      id: 2,
      nombre: 'escaldadura',
      nombreTecnico: '',
      descripcion: ''
    },
    {
      id: 3,
      nombre: 'pudriciòn radical',
      nombreTecnico: 'fusarium oxysporum',
      descripcion: ''
    }
  ];
  public malezas = [
    {
      id: 1,
      nombre: 'navo',
      nombreTecnico: 'brassica rapa subsp oleifera',
      descripcion: ''
    },
    {
      id: 2,
      nombre: 'acahual',
      nombreTecnico: 'tithonia diversifolia',
      descripcion: ''
    },
    {
      id: 3,
      nombre: 'quelite',
      nombreTecnico: 'amaranthus',
      descripcion: ''
    },
    {
      id: 4,
      nombre: 'avena',
      nombreTecnico: 'avena fatua',
      descripcion: ''
    },
    {
      id: 5,
      nombre: 'chayotillo',
      nombreTecnico: 'sicyos deppei',
      descripcion: ''
    }
  ];

  public textoBuscar = '';;

  constructor( private alertCtrl: AlertController) { }
  async presentAlert(nombre, nombreTecnico) {
    const alert = await this.alertCtrl.create({
      header: nombre,
      mode: 'ios',
      subHeader: nombreTecnico,
      message: 'This is an alert message.',
      buttons: ['OK']
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
    this.presentAlert(afeccion.nombre, afeccion.nombreTecnico);
  }

}
