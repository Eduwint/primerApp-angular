import { Component } from '@angular/core';
import { TableUsersComponent } from './table-users/table-users.component';
import { TableAreasComponent } from './table-areas/table-areas.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';

@Component({
  selector: 'app-root',
  imports: [
    TableUsersComponent,
    TableAreasComponent,
    FormularioUsuarioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '1-appAngular';
}
