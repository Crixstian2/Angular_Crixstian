import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludo-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saludo-component.html',
  styleUrl: './saludo-component.css'
})
export class SaludoComponent {
  usuario = '';
}
