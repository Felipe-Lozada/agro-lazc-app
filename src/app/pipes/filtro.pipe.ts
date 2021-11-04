import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  //dataFiltered: any[];

  transform(afeccionesArr: any[], texto: string): any[] {

    if(texto.length === 0) {
        return afeccionesArr;
    }

    texto = texto.toLowerCase();

    return afeccionesArr.filter(item =>
      item.nombre.toLowerCase().includes(texto)
      || item.nombreTecnico.toLowerCase().includes(texto)
      || item.tipo.toLowerCase().includes(texto)
    );

  }
}

