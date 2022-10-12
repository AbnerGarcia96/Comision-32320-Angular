import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor() { }

  obtenerEstudiantes(){
    return [{
      nombre: 'Pablo',
      apellido: 'Garcia',
      usuario: 'pgarcia',
      contrasena: '123'
    },{
      nombre: 'Luis',
      apellido: 'Florez',
      usuario: 'lflorez',
      contrasena: '123'
    }]
  }
}
