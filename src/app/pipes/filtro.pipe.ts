import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arr: any[], texto: any): any[] {
    //if(texto === '') {
      //return arr;
   //}

    return arr.filter(item => item.nombre.includes(texto));
  }

}
