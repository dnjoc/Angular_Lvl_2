import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diaSemana',
  standalone: true
})
export class DiaSemanaPipe implements PipeTransform {

  transform(value: number): string {
    let diaSemana: string;
    switch (value) {
      case 1:
        diaSemana = 'domingo';
        break;
      case 2:
        diaSemana = 'lunes';
        break;
      case 3:
        diaSemana = 'martes';
        break;
      case 4:
        diaSemana = 'miércoles';
        break;
      case 5:
        diaSemana = 'jueves';
        break;
      case 6:
        diaSemana = 'viernes';
        break;
      case 7:
        diaSemana = 'sábado';
        break;
      default:
        diaSemana = 'día inválido';
        break;
    }
    return diaSemana;
  }

}
