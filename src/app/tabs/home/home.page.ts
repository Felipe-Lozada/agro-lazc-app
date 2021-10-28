import { NavController, ToastController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
//import { CultivosService } from '../../services/cultivos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public cultivos = [
    {
      id: 1,
      nombre: 'maiz',
      foto: '../../../assets/img/maiz.jpg'
    },
    { id: 2,
      nombre: 'frijol',
      foto: '../../../assets/img/frijol.jpg'
    },
    {
      id: 3,
      nombre: 'cebada',
      foto: '../../../assets/img/cebada.jpg'
    },
    {
      id: 4,
      nombre: 'haba',
      foto: '../../../assets/img/haba.jpeg'
    },
    {
      id: 5,
      nombre: 'aguacate',
      foto: 'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/3/9/394060_image.jpg'
    }
  ];

  /*constructor(private cultivoService: CultivosService) {
    this.cultivoService.obtenerCultivosPorNombre().then(
      (res: any) => {
        console.table(res);
      }
    ).catch(error => console.log(error));
  }*/

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private menuCtrl: MenuController) {}
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {
  }

  verDetallesCultivo(idCultivo){
    console.log(idCultivo);
    // Se envia la peticion http con el id del cultivo, para obtener la info de este.
    if (idCultivo === 1) {
      this.navCtrl.navigateForward('/cultivo-info');
    } else if(idCultivo === 3){
      this.navCtrl.navigateForward('/cebada');
    } else {
      this.presentToast('Estas opciones aun no estan habilitadas');
    }
  }

  toggleMenu(){
    this.menuCtrl.toggle('main');
  }
}
