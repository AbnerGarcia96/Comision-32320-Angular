import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [];
  
  constructor() { }

  obtenerCursos(): Curso[]{
    this.cursos = [{
      nombre: 'Angular',
      comision: '32310',
      profesor: 'Keven',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 1, 28),
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
      estudiantes: [{
        nombre: 'Pablo',
        apellido: 'Garcia',
        usuario: 'pgarcia',
        contrasena: '123'
      }]
    },
    {
      nombre: 'Angular',
      comision: '32320',
      profesor: 'Fernando',
      fechaInicio: new Date(2022, 2, 1),
      fechaFin: new Date(2022, 3, 30),
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
      estudiantes: [{
        nombre: 'Pablo',
        apellido: 'Garcia',
        usuario: 'pgarcia',
        contrasena: '123'
      }]
    },
    {
      nombre: 'ReactJS',
      comision: '33310',
      profesor: 'Arturo',
      fechaInicio: new Date(2022, 1, 1),
      fechaFin: new Date(2022, 3, 28),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
      estudiantes: [{
        nombre: 'Pablo',
        apellido: 'Garcia',
        usuario: 'pgarcia',
        contrasena: '123'
      }]
    },
    {
      nombre: 'VueJS',
      comision: '34310',
      profesor: 'Lautaro',
      fechaInicio: new Date(2022, 5, 1),
      fechaFin: new Date(2022, 6, 30),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
      estudiantes: [{
        nombre: 'Pablo',
        apellido: 'Garcia',
        usuario: 'pgarcia',
        contrasena: '123'
      }]
    }];
    return this.cursos;
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
  }
}
