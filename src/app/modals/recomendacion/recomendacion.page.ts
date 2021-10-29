import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendacion',
  templateUrl: './recomendacion.page.html',
  styleUrls: ['./recomendacion.page.scss'],
})
export class RecomendacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  salir(){
    console.log('gusbai');
  }
}
