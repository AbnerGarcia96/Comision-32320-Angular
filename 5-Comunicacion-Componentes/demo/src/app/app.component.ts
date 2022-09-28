import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudiantes = [
    {nombre: 'Agustin', curso: 'Angular'},
    {nombre: 'Jesica', curso: 'Angular'},
    {nombre: 'Ijak', curso: 'Angular'},
    {nombre: 'Jesus', curso: 'Angular'},
  ];
}
