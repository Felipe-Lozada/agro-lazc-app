import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arr: any[], texto: string): any[] {
    if(texto.length === 0) {
      return arr;
    }

    texto = texto.toLowerCase();

    return arr.filter(item => item.nombre.toLowerCase().includes(texto)
      || item.nombreTecnico.toLowerCase().includes(texto));
  }

}
