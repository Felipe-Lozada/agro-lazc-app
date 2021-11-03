import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'producto'
})
export class ProductoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
