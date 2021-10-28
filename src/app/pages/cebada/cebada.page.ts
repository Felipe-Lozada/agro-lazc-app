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
    nombre: 'pulgon',
    nombreTecnico: 'aphidoidea',
    descripcion: ''
  },
  {
    id: 2,
    nombre: 'fraile',
    nombreTecnico: 'macrodactylus subspinosus',
    descripcion: ''
  },
  {
    id: 3,
    nombre: 'chapulin',
    nombreTecnico: 'sphenarium purpurascens',
    descripcion: ''
  },
  {
    id: 4,
    nombre: 'trips',
    nombreTecnico: 'frankliniella occidentalis',
    descripcion: ''
  }
];
public cebadaEnfermedades = [
  {
    id: 1,
    nombre: 'roya',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 2,
    nombre: 'escaldadura',
    nombreTecnico: '',
    descripcion: ''
  },
  {
    id: 3,
    nombre: 'mancha reticulada',
    nombreTecnico: '',
    descripcion: ''
  }
];
public cebadaMalezas = [
  {
    id: 1,
    nombre: 'navo',
    nombreTecnico: 'brassica rapa subsp oleifera',
    descripcion: ''
  },
  {
    id: 2,
    nombre: 'acahual',
    nombreTecnico: 'tithonia diversifolia',
    descripcion: ''
  },
  {
    id: 3,
    nombre: 'quelite',
    nombreTecnico: 'amaranthus',
    descripcion: ''
  },
  {
    id: 4,
    nombre: 'avena',
    nombreTecnico: 'avena fatua',
    descripcion: ''
  },
  {
    id: 5,
    nombre: 'chayotillo',
    nombreTecnico: 'sicyos deppei',
    descripcion: ''
  }
];

  constructor() { }

  ngOnInit() {
  }

  verRecomendaciones(e){
    console.log(e);
  }

}
