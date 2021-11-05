import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, ActionSheetController } from '@ionic/angular';
import { RecomendacionPage } from '../../modals/recomendacion/recomendacion.page';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-afecciones',
  templateUrl: './afecciones.page.html',
  styleUrls: ['./afecciones.page.scss'],
})
export class AfeccionesPage implements OnInit {
  public afecciones = [];
  public afeccionesSinOrdenar = [
    {
      id: 1,
      tipo: 'plaga',
      nombre: 'pulgon',
      nombreTecnico: 'aphidoidea',
      descripcion: `Los pulgones son pequeños insectos que succionan la savia de la planta y que poseen una gran capacidad reproductora. 
      Por ello, muchas especies de pulgones son algunas de las plagas más destructivas en: 
      horticultura, agricultura, silvicultura y en espacios verdes y jardines.`
    },
    {
      id: 2,
      tipo: 'plaga',
      nombre: 'fraile, frailecillo',
      nombreTecnico: 'macrodactylus subspinosus',
      descripcion: `Es una plaga que generalmente ataca en la etapa de floración además de alimentarse de hojas y frutos pequeños. 
      Se les puede considerar plagas esporádicas, 
      debido a que en un año aparecen en gran intensidad y en años subsecuentes la población de los mismos es baja.`
    },
    {
      id: 3,
      tipo: 'plaga',
      nombre: 'chapulin',
      nombreTecnico: 'sphenarium purpurascens',
      descripcion: `El chapulín es una plaga que se presenta anualmente, ocasionando grandes daños en los cultivos de temporal, 
      devorando los tallos y follaje en etapas tiernas; 
      que de no tomar medidas de control químico esto podría causar pérdidas que van del 50 al 60%.`
    },
    {
      id: 4,
      tipo: 'plaga',
      nombre: 'trips',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: `Los adultos y larvas dañan al cultivo al alimentarse de las hojas y brotes tiernos, 
      además de flores y frutos, en estos últimos produce los daños más importantes a nivel económico 
      los cuales son malformaciones, además favorece el establecimiento de enfermedades causadas por hongos
      Pueden completar su ciclo de vida entre 14 a 30 días. 
      Cuando las temperaturas son mayores a los 30°C el ciclo de vida se puede acortar a 10 días. 
      Los adultos pueden vivir hasta 20 días. 
      Presentan Partenogénesis facultativa, es decir que algunos óvulos pueden desarrollarse con o sin fecundación. 
      Las hembras que no son apareadas producen solamente hembras como progenie.`
    },
    {
      id: 5,
      tipo: 'plaga',
      nombre: 'gallina ciega',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ``
    },
    {
      id: 6,
      tipo: 'plaga',
      nombre: 'araña roja,  ácaro de dos puntos',
      nombreTecnico: 'frankliniella occidentalis,tetranychus urticae',
      descripcion: `Esta especie es la más común en los cultivos hortícolas
      que se establecen en zonas con altas temperaturas y humedades relativas bajas, 
      su daño lo inicia en el envés de las hojas causando decoloraciones, punteaduras o manchas amarillentas 
      que pueden apreciarse en el haz como primeros síntomas, produce una red o telaraña para protegerse con poblaciones
      altas puede ocasionar desecación e incluso defoliación, 
      su ciclo de vida es de 9-12 días, cada hembra deposita de 100-120 huevecillos.`
    },
    {
      id: 7,
      tipo: 'enfermedad',
      nombre: 'roya',
      nombreTecnico: 'puccia sorghi',
      descripcion: ``
    },
    {
      id: 8,
      tipo: 'enfermedad',
      nombre: 'escaldadura',
      nombreTecnico: '',
      descripcion: ``
    },
    {
      id: 9,
      tipo: 'enfermedad',
      nombre: 'pudriciòn radical',
      nombreTecnico: 'fusarium oxysporum',
      descripcion: ``
    },
    {
      id: 10,
      tipo: 'maleza',
      nombre: 'navo',
      nombreTecnico: 'brassica rapa subsp oleifera',
      descripcion: ``
    },
    {
      id: 11,
      tipo: 'maleza',
      nombre: 'acahual',
      nombreTecnico: 'tithonia diversifolia',
      descripcion: ``
    },
    {
      id: 12,
      tipo: 'maleza',
      nombre: 'quelite',
      nombreTecnico: 'amaranthus',
      descripcion: ``
    },
    {
      id: 13,
      tipo: 'maleza',
      nombre: 'avena',
      nombreTecnico: 'avena fatua',
      descripcion: ``
    },
    {
      id: 14,
      tipo: 'maleza',
      nombre: 'chayotillo',
      nombreTecnico: 'sicyos deppei',
      descripcion: ``
    }
  ];

  public textoBuscar = '';
  public coincidencias = false;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private actCtrl: ActionSheetController,
    private storage: Storage
    ) {
      this.storage.create();
      this.storage.get('afeccionesArr').then(
        (res: any) => {
          if(res) {
            console.log(res);
            this.afecciones = res;
          } else {
            this.afecciones = this.afeccionesSinOrdenar;
          }
        }
      ).catch(
        err => console.log(err)
      );
    }

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
      mode: 'md',
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

    async presentActionSheet() {
      const actionSheet = await this.actCtrl.create({
      header: 'Filtros',
      subHeader: 'ordenar por',
      mode: 'md',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'A-Z',
        handler: () => {
          this.ordenarAZ();
        }
      }, {
        text: 'Z-A',
        handler: () => {
          this.ordenarZA();
        }
      }, {
        text: 'Nombre cientifico',
        handler: () => {
          this.ordenarNT();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    }

    ngOnInit() {
      this.storage.create();
      this.storage.get('afeccionesArr').then(
        (res: any) => {
          if(res) {
            console.log(res);
            this.afecciones = res;
          } else {
            this.afecciones = this.afeccionesSinOrdenar;
          }
        }
      ).catch(
        err => console.log(err)
      );
    }

    buscarAfecciones(e){
      console.log(e);
      this.textoBuscar = e.detail.value;
      console.log(this.afecciones.length);
    }

    onClick(afeccion) {
    this.presentAlert(afeccion.nombre, afeccion.nombreTecnico, afeccion.descripcion);
    console.table(afeccion);
    }

    triggerAction(){
      this.presentActionSheet();
    }

    ordenarAZ(){
      const afeccionsAZ = this.afeccionesSinOrdenar.sort((n, sn)=> (sn.nombre < n.nombre) ? 1 : -1);
      console.log(afeccionsAZ);
      this.storage.set('afeccionesArr', afeccionsAZ);
    }

    ordenarZA(){
      const afeccionsZA = this.afeccionesSinOrdenar.sort((n, sn)=> (n.nombre < sn.nombre) ? 1 : -1);
      console.log(afeccionsZA);
      this.storage.set('afeccionesArr', afeccionsZA);
    }

    ordenarNT(){
      const afeccionsNT = this.afeccionesSinOrdenar.sort((n, sn)=> (sn.nombreTecnico < n.nombreTecnico) ? 1 : -1);
      console.log(afeccionsNT);
      this.storage.set('afeccionesArr', afeccionsNT);
    }


    ionViewDidLeave(){
      this.storage.remove('afeccioneArr');
      console.log('borrado');
    }

    ionViewWillLeave(){
      this.storage.remove('afeccioneArr');
      console.log('bai');
    }
}
