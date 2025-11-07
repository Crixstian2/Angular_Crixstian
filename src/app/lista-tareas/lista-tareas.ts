import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TareasService } from '../tareas-service';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css'
})
export class ListaTareas implements OnInit {
   tareas: any[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.tareas = this.tareasService.obtenerPendientes();
  }
}
