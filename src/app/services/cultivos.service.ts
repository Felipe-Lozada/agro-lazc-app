import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CultivosService {

  constructor(private http: HttpClient) { }
  obtenerCultivosPorNombre(){
    const url='http://192.168.1.76/agroLazcAppServer/rutas/cultivos/cultivos.php';

    return new Promise ((resolve, reject) => {
      this.http.get(url)
        .subscribe(response => {
          if (response) {
            resolve (response);
          } else {
            reject ({message: 'no'});
          };
        });
    });
  }
}
