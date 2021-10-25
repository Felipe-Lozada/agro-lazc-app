import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cebada',
  templateUrl: './cebada.page.html',
  styleUrls: ['./cebada.page.scss'],
})
export class CebadaPage implements OnInit {

public cebadaPlagas = [
  {
    id: '',
    nombre: '',
    nombreTecnico: '',
    descripcion: ''},
  {
    id: '',
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: '',
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: '', nombre: '',
    nombreTecnico: '',
    descripcion: ''
  }
];
public cebadaEnfermedades = [
  {
    id: '', nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: '', nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: '', nombre: '',
    nombreTecnico: '',
    descripcion: ''
  }
];
public cebadaMalezas = [
  {
    id: '',
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: '',
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: '',
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: '',
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: '',
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  }
];

  constructor() { }

  ngOnInit() {
  }

}
