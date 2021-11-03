import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {
  public image = '../../../assets/img/foto_asesor.svg';
  public asesor = {
    nombre: '',
    titulo: '',
    numero: 0,
    foto: this.image,
    cv: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
