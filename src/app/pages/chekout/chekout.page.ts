import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.page.html',
  styleUrls: ['./chekout.page.scss'],
})
export class ChekoutPage implements OnInit {


  public checkout ={
    productos: 4,
    total: 556.12,
  };
  public chArr = [];

  public modoPago = '';

  constructor(
    private sotrage: Storage,
    private navCtrl: NavController,
    private alertCrl: AlertController,
    private loadingController: LoadingController
  ) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentAlertPrompt() {
    const alert = await this.alertCrl.create({
      mode: 'ios',
      cssClass: 'info-msg',
      message: 'Ingresa tu numero y contraseña, un asesor se podra en contacto contigo.',
      header: 'Ingersa tu numero',
      inputs: [
        {
          name: 'phone',
          type: 'number',
          placeholder: '5522553388',
          attributes: {
          maxlength: 10,
          }
        },{
          name: 'pass',
          type: 'password',
          placeholder: '********',
          attributes: {
          maxlength: 10,
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: '',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (x) => {
            this.mostrar(x);
          }
        }
      ]
    });

    await alert.present();
  }


  ionViewWillEnter(){
    this.checkChekout();
  }

  ngOnInit() {
  }

  checkChekout(){
    this.sotrage.create();
    this.sotrage.get('chekout')
      .then(
        (ch: any) => {
          if(ch.length > 0) {
            this.chArr = ch;
          }
        }
      )
      .catch(
        error => console.error(error)
      );
  }


  hacerPedido(){
    this.presentAlertPrompt();
  }

  radioSelectected(e){
    console.log(e.detail.value);
  }

  buscarDireccion(ev) {
    console.log(ev.detail.value);
  }


  mostrar(a){
    console.log({a, x:this.checkout});
  }

  onSearchChange(e: any){
    console.log(e.detail.value);
  }
}
