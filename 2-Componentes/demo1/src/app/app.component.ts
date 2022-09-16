import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>Hola Mundo</h1>'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desafio 1 - Clase 2';

  constructor(){
    this.title = 'Demostracion Componentes';
  }
}
