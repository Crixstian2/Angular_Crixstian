import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraMayus',
  standalone: true
})
export class PrimeraMayusPipe implements PipeTransform {
  transform(texto: string): string {
    if (!texto) return '';
    return texto[0].toUpperCase() + texto.substring(1);
  }
}
