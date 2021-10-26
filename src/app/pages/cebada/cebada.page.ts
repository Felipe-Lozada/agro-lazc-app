import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cebada',
  templateUrl: './cebada.page.html',
  styleUrls: ['./cebada.page.scss'],
})
export class CebadaPage implements OnInit {

public cebadaPlagas = [
  {
    id: 1,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 2,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 3,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 4,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  }
];
public cebadaEnfermedades = [
  {
    id: 1,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 2,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 3,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  }
];
public cebadaMalezas = [
  {
    id: 1,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 2,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 3,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 4,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 5,
    nombre: '',
    nombreTecnico: '',
    descripcion: ''
  }
];

  constructor() { }

  ngOnInit() {
  }

}
