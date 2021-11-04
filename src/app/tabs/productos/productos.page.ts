import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  public categoriasArray: any[];
  public segmentModel: string;

  constructor(
    private catService: CategoriasService,
    private actController: ActionSheetController
  ) {
    this.catService.obtenerCategorias()
    .then((categorias: any[]) => this.categoriasArray = categorias)
    .catch(err => console.error(err));
  }

  async presentActionSheet() {
    const actionSheet = await this.actController.create({
      header: 'Ordenar por',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Nombre',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Proovedor',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Precio',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
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
  }

  ordenarProductos(e) {
    console.log(e.detail.value);
  }

  filtrarProductos(){
    this.presentActionSheet();
  }

}
