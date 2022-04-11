import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  // el segundo argumento es un parametro del pipe con valor por defecto true

  transform(arg: string, enMayusculas: boolean = true): string {
    // console.log(arg);
    // if (enMayusculas) {
    //   return arg.toUpperCase();
    // }
    // return arg.toLowerCase();
    return enMayusculas ? arg.toUpperCase() : arg.toLowerCase();
  }
}
