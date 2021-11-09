import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { CarritoPage } from 'src/app/modals/carrito/carrito.page';
import { DetallesProodPage } from 'src/app/modals/detalles-prood/detalles-prood.page';
import { ProductosService } from './../../services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  public categoriasArray: any[];
  public mostrarPor: string;
  public productosArr: any[];
  public productosSinOrdenar: any[];
  public cartItems: any[];

  constructor(
    private catService: CategoriasService,
    private actController: ActionSheetController,
    private modalCtrl: ModalController,
    private prodService: ProductosService,
    private storage: Storage
  ) {
    this.catService.obtenerCategorias()
    .then((categorias: any[]) => this.categoriasArray = categorias)
    .catch(err => console.error(err));

    this.obternerProductos();
  }


  obternerProductos(){
    this.prodService.obtenerTodosLosProductos()
    .then((prodArr: any) => {
      this.productosSinOrdenar = prodArr;
      console.log(this.productosSinOrdenar);
    })
    .catch( err => console.error(err));

    this.storage.create();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CarritoPage,
      mode: 'ios',
      cssClass: 'modalSize'
    });
    return await modal.present();
  }

  async presentModal2(productoD) {
    const modal = await this.modalCtrl.create({
      component: DetallesProodPage,
      mode: 'ios',
      cssClass: 'modalSize',
      componentProps: {
        id: productoD.id,
        cartegoria: productoD.cartegoria,
        proovedor: productoD.proovedor,
        presentacion: productoD.presentacion,
        marca: productoD.marca,
        activo: productoD.activo,
        precio: productoD.precio,
        cultivo: productoD.cultivo,
        recomendaciones: productoD.recomendaciones,
        fichaTecnica: productoD.fichaTecnica,
        hojaSeguridad: productoD.hojaSeguridad,
        modoAccion: productoD.modoAccion,
        dosis: productoD.dosis,
        descripcion: productoD.descripcion,
        grupo: productoD.grupo,
        logo: productoD.logo
      }
    });
    return await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actController.create({
      header: 'Ordenar por',
      cssClass: 'my-custom-class',
      mode: 'md',
      buttons: [{
        text: 'Nombre',
        handler: () => {
          this.ordenarPorNombre();
        }
      }, {
        text: 'Proovedor',
        handler: () => {
        this.ordenarPorProovedor();
        }
      }, {
        text: 'Precio',
        handler: () => {
        this.ordenarPorPrecio();
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

  buscarProductos(e) {
    console.log(e.detail.value);
  }

  verCarrito() {
    this.presentModal();
  }

  agregarCarrito(producto){
    console.log(producto);
    this.cartItems.push(producto);
    console.log(this.cartItems);
  }

  verDetalles(producto){
    console.log(producto);
    this.presentModal2(producto);
  }

  filtrarProductos(){
    this.presentActionSheet();
  }

  ordenarProductos(ev: any){
    this.mostrarPor= ev.detail.value;
    console.log(ev);
    console.log(this.mostrarPor);
  }

  ordenarPorNombre(){
    const porductosPorNombre = this.productosSinOrdenar.sort((a, b) => (b.marca < a.marca) ? 1 : -1);
    console.log(porductosPorNombre);
  }

  ordenarPorProovedor(){
    const porductosPorProovedor = this.productosSinOrdenar.sort((a, b) => (b.proovedor < a.proovedor) ? 1 : -1);
    console.log(porductosPorProovedor);
  }

  ordenarPorPrecio(){
    // const porductosPorNombre = this.productosSinOrdenar.sort((a, b) => (b.marca < a.marca) ? 1 : -1);
    // console.log(porductosPorNombre);
    console.log('c');
  }

}
