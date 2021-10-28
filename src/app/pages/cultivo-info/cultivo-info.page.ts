import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cultivo-info',
  templateUrl: './cultivo-info.page.html',
  styleUrls: ['./cultivo-info.page.scss'],
})
export class CultivoInfoPage implements OnInit {

  public maizPlagas = [
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
    },
    {
      id: 5,
      nombre: 'gallina ciega',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    },
    {
      id: 6,
      nombre: 'araña roja',
      nombreTecnico: 'frankliniella occidentalis',
      descripcion: ''
    }
  ];
  public maizEnfermedades = [
    {
      id: 1,
      nombre: 'roya',
      nombreTecnico: 'puccia sorghi',
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
      nombre: 'pudriciòn radical',
      nombreTecnico: 'fusarium oxysporum',
      descripcion: ''
    }
  ];
  public maizMalezas = [
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
