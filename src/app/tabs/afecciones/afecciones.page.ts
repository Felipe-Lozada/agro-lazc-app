/* eslint-disable max-len */
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
      nombreTecnico: 'phyllophaga spp',
      descripcion: `Atacan a un gran número de cultivos, entre los más importantes son Maíz, Papa, Agave, Hortalizas y Pasto.
      Las larvas son el estadio que causa mayor daño al cultivo y se le conoce comúnmente como Gallina Ciega.
      Posee gran adaptabilidad al ambiente.
      Los Adultos son conocidos popularmente como Mayates de Mayo Escarabajos de Junio o Chicatana`
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
      nombreTecnico: 'puccinia sorghi',
      descripcion: `Esta enfermedad está ampliamente distribuida por todo el mundo, 
      en climas subtropicales y templados y en tierras altas donde hay bastante humedad. 
      La roya común es más conspicua cuando las plantas se acercan a la floración. 
      Se le puede reconocer por las pústulas pequeñas y pulverulentas, tanto en el haz como en el envés de las hojas. 
      Las pústulas son de color café claro en las etapas iniciales de la infección; más adelante la epidermis se rompe
      y las lesiones se vuelven negras a medida que la planta madura. 
      Las plantas del hospedante alterno (Oxalis spp.) son infectadas frecuentemente con pústulas color anaranjado claro. 
      Esta es simplemente otra fase del mismo hongo.`
    },
    {
      id: 8,
      tipo: 'enfermedad',
      nombre: 'escaldadura',
      nombreTecnico: 'xanthomonas albilineans',
      descripcion: `El síntoma clásico en la fase crónica de la enfermedad, se caracteriza por la presencia de rayas blancas finas definidas
      paralelas a la nervadura principal, clorosis en plantas jóvenes, “encrespamiento” hacia el interior, escaldado de la hoja, 
      decoloraciones rojizas en el interior del tallo a la altura del nudo o en la base de los brotes.
      En la fase aguda de la enfermedad se presenta la muerte súbita, esta forma aparece durante cambios de alta precipitación a sequía,
      pero se limita a variedades altamente susceptibles.
      En plantas tolerantes a la enfermedad, se puede presentar la fase de latencia,
      permaneciendo por semanas o meses sin el desarrollo de síntomas, escapando a la detección.
      `
    },
    {
      id: 9,
      tipo: 'enfermedad',
      nombre: 'pudriciòn radical',
      nombreTecnico: 'fusarium oxysporum',
      descripcion: `Los  síntomas observados son similares a los sufridos  por sequía y falta de alimento, 
      ya que este hongo afecta las raíces reduciendo el volumen de raíces necesario para absorber agua y nutrientes
      Las raíces de plantas enfermas se observan de color marrón rojizo. 
      El hongo coloniza la zona del tallo cercana al suelo (corona) causando una decoloración de los tejidos bajo la corteza, 
      que se extiende al tallo sobre la línea del suelo.
      Típicamente, los síntomas aparecen primero en una planta y luego en plantas cercanas.
      Puede  observarse amarillez del follaje, crecimiento lento del arbolito y muerte regresiva.
      Las plántulas afectadas mueren en pocos días o semanas.`
    },
    {
      id: 10,
      tipo: 'maleza',
      nombre: 'navo',
      nombreTecnico: 'brassica rapa',
      descripcion: `Su propagación es exclusivamente por semilla, que por su tamaño, de 1 a 2 mm de diámetro, y su forma esférica, 
      se distribuye fácilmente en los lotes, sobre los rastrojos y a través de las maquinarias.
      La semilla en el suelo permanece viable durante largos períodos formando bancos persistentes, 
      y la emergencia es sólo parcialmente reducida con labranzas convencionales que entierran las semillas, 
      no obstante puede emerger de hasta 4-5 cm de profundidad.`
    },
    {
      id: 11,
      tipo: 'maleza',
      nombre: 'acahual, acahualillo',
      nombreTecnico: 'simsia apmlexacaulis',
      descripcion: `Se ebncuentra en forma vegetativa principalmentye de abril a octubre y floreciendo de mayo a noviembre.
      Absorbe rapidamente los nutrientes y se progapga de la misma manera en los cultivos`
    },
    {
      id: 12,
      tipo: 'maleza',
      nombre: 'quelite',
      nombreTecnico: 'amaranthus hybridus',
      descripcion: ` Plántula: primeras hojas simples, entre elípticas y ovales, con borde completo. Planta adulta: altura puede ser mayor a 1 m. Tallo erguido, muy ramificado, casi glabro, que porta estrías longitudinales rojizas.
      Hojas: ovales, romboédricas, de borde plano, mas o menos glabras. Pequeña dentición con un mucrón en el ápice del limbo. Inflorescencias: alargadas, espiciformes, a menudo ramificadas. Brácteas mucronadas, rígidas y espinosas. Perianto formado por 5 piezas oblongas, lanceoladas y finamente acuminadas. 
      Frutos: ligeramente arrugados a lo largo y dehiscentes.`
    },
    {
      id: 13,
      tipo: 'maleza',
      nombre: 'avena',
      nombreTecnico: 'avena fatua',
      descripcion: `Planta con raíz fibrosa, densamente ramificada; con tallos herbáceos, erectos o, algunas veces, plegados en los nudos inferiores, de 40 a 60 cm de altura; hojas con lígula membranosa, limbo lanceolado de 10 a 20 cm de largo y 1 cm de ancho, ascendente y áspero el tacto; la inflorescencia es una panícula racemosa, abierta, de 10 a 30 cm de largo de espiguillas colgantes, sostenidas por pedicelos delgados, y que contienen 2 a 3 florecillas cubiertas por glumas de 2-3 cm de largo con nervaduras verdes prominentes y con pelos largos de color café en la base`
    },
    {
      id: 14,
      tipo: 'maleza',
      nombre: 'chayotillo',
      nombreTecnico: 'sicyos deppei',
      descripcion: `Hierba trepadora, de la familia de las cucurbitáceas, provista de zarcillos; tiene hojas ásperas, palmatilobuladas, de hasta 15 cm en la parte más ancha; sus flores son pequeñas y verdosas; las femeninas crecen en ejes axilares cortos: “Entre los huecos de las cercas asoman sus caritas los quiebraplatos, los chayotillos y las maravillas`
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
      mode: 'ios',
      cssClass: 'alert-af',
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
      mode: 'ios',
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
      this.storage.remove('afeccionesArr');
      console.log('borrado');
    }

    ionViewWillLeave(){
      this.storage.remove('afeccionesArr');
      console.log('bai');
    }
}
