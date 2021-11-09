import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productUrl= '../assets/productos.json';
  constructor(
    public storage: Storage,
    public http: HttpClient,
    public toastCtrl: ToastController
  ) { }

  //Mostrar el toast

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      color: 'tertary',
      mode: 'ios',
      duration: 2000
    });
    toast.present();
  }


  //obtener todos los produictos
  obtenerTodosLosProductos(){
    return new Promise ((resolve, reject)=>{
      this.http.get(this.productUrl)
        .subscribe( (res: any)=>{
          if(res) {
            this.storage.create();
            this.storage.set('product', res); //guardar productos en cache
            resolve(res);
            console.log({status: 200, message: 'ok'});
            this.presentToast('ok');
          } else{
            reject({status: 404, message: 'No hay datos' });
          }
        });
    });
  }
}
