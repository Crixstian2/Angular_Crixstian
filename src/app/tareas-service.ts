import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
   obtenerPendientes() {
    return [
      { id: 1, nombre: 'Aprender Angular' },
      { id: 2, nombre: 'Repasar TypeScript' },
      { id: 3, nombre: 'Tomar agua' }
    ];
  }
}
