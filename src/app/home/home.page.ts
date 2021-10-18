import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log({message: 'Iniciar Sesion', code: 0});
  }
  register(){
    console.log({message: 'Crear usuario', code: 1});
  }
  salir(){
    console.log({message: 'Salir de la app', code: 2});
    // eslint-disable-next-line @typescript-eslint/dot-notation
    navigator['app'].exitApp();
  }
}
