import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  login(){
    console.log({message: 'Iniciar Sesion', code: 0});
    this.navCtrl.navigateForward('login');
  }
  register(){
    console.log({message: 'Crear usuario', code: 1});
    this.navCtrl.navigateForward('register');
  }
  salir(){
    console.log({message: 'Salir de la app', code: 2});
    // eslint-disable-next-line @typescript-eslint/dot-notation
    navigator['app'].exitApp();
  }
}
