import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  obtenerCategorias(){
    return new Promise ((resolve, reject) => {
      this.http.get('../assets/categorias.json')
      .subscribe( data => {
        if(data) {
          resolve(data);
        } else {
          reject(new Error('no'));
        }
      });
    });
  }


}
