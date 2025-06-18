import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuario',
  imports: [FormsModule],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css',
})
export class FormularioUsuarioComponent {
  usuario = {
    nombre: '',
    correo: '',
  };

  enviar() {
    // Imprime los datos del usuario en la consola del navegador.
    console.log('Datos enviados:', this.usuario);
  }
}
