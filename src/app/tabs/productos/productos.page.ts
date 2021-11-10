import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ActionSheetController, ModalController, ToastController } from '@ionic/angular';
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
  public cartItems = [];
  public numberItems = 0;
  constructor(
    private catService: CategoriasService,
    private actController: ActionSheetController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private prodService: ProductosService,
    private storage: Storage
  ) {
    this.catService.obtenerCategorias()
    .then((categorias: any[]) => this.categoriasArray = categorias)
    .catch(err => console.error(err));

    this.obternerProductos();
    this.verSiHayProductos();
  }

  // ver si hay items en el carrito
  verSiHayProductos(){
    this.storage.create();
    this.storage.get('cart')
    .then((res: any) => (res.length > 0) ? this.numberItems = res : this.numberItems = 0)
    .catch(err => {
      console.error(err);
      this.numberItems = 0;
    });
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

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      color: 'secondary',
      mode: 'ios',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }


  buscarProductos(e) {
    console.log(e.detail.value);
  }

  verCarrito() {
    this.storage.set('cart', this.cartItems)
    .then((res: any)=>{
      if(res.length > 0) {
        setTimeout(() => {
          this.cartItems = [];
          this.presentToast('Agregado al carrito');
        }, 2100);
        this.presentModal();
      }
    })
    .catch(err => console.error(err));
    //this.presentModal();

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
    console.log(typeof(ev.detail.value));
    console.log(this.mostrarPor);
  }

  ordenarPorNombre(){
    const porductosPorNombre = this.productosSinOrdenar.sort((a, b) => (b.marca < a.marca) ? 1 : -1);
    console.log(porductosPorNombre);
    this.productosSinOrdenar=[];
    this.productosSinOrdenar = porductosPorNombre;
  }

  ordenarPorProovedor(){
    const porductosPorProovedor = this.productosSinOrdenar.sort((a, b) => (b.proovedor < a.proovedor) ? 1 : -1);
    console.log(porductosPorProovedor);
    this.productosSinOrdenar=[];
    this.productosSinOrdenar = porductosPorProovedor;
  }

  ordenarPorPrecio(){
    // const porductosPorNombre = this.productosSinOrdenar.sort((a, b) => (b.marca < a.marca) ? 1 : -1);
    // console.log(porductosPorNombre);
    console.log('c');
  }

}
