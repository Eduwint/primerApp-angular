import { Component } from '@angular/core';
import { TableUsersComponent } from './table-users/table-users.component';

@Component({
  selector: 'app-root',
  imports: [TableUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '1-appAngular';
}
