import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-users',
  imports: [CommonModule],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css',
})
export class TableUsersComponent {
  usuarios = [
    { id: 1, nombre: 'Eduwin Tarazona', correo: 'eduwin@gmail.com' },
    { id: 2, nombre: 'Juana Salazar', correo: 'juana@hotmail.com' },
    { id: 3, nombre: 'Martin Tarazona', correo: 'martin@gmail.com' },
    { id: 4, nombre: 'Lina Tarazona', correo: 'lina@hotmail.com' },
  ];
}
