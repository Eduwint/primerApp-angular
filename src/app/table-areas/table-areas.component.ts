import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-areas',
  imports: [CommonModule],
  templateUrl: './table-areas.component.html',
  styleUrl: './table-areas.component.css',
})
export class TableAreasComponent {
  areas = [
    {
      id: 1,
      nombre: 'Desarrollo de Software',
      descripcion: 'Encargada de crear y mantener aplicaciones',
    },
    {
      id: 2,
      nombre: 'Infraestructura',
      descripcion: 'Gestiona servidores, redes y sistemas',
    },
    {
      id: 3,
      nombre: 'Talento Humano',
      descripcion: 'Maneja procesos de personal y bienestar',
    },
    {
      id: 4,
      nombre: 'Finanzas',
      descripcion: 'Supervisa la contabilidad y presupuesto institucional',
    },
  ];
}
