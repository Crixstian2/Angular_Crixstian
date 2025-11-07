import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SaludoComponent } from './saludo-component/saludo-component';
import { ListaTareas } from './lista-tareas/lista-tareas';
import { PrimeraMayusPipe } from './primera-mayus-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, SaludoComponent, ListaTareas, PrimeraMayusPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taller-angular-cristian');
  palabra = 'cristian';
}
