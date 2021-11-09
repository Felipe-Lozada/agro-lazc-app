import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'producto'
})
export class ProductoPipe implements PipeTransform {

  transform(productosArrIn: any[], texto: string): any[] {

    if(texto.length === 0) {
        return productosArrIn;
    }

    texto = texto.toLowerCase();

    return productosArrIn.filter(item =>
      item.marca.toLowerCase().includes(texto)
      || item.categoria.toLowerCase().includes(texto)
      || item.tipo.toLowerCase().includes(texto)
    );

  }

}
