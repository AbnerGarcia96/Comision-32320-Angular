import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { Curso } from '../../models/curso';

@Injectable()
export class CursoService {
  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Angular',
      comision: '32310',
      profesor: 'Keven',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 1, 28),
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 2,
      nombre: 'Angular',
      comision: '32320',
      profesor: 'Fernando',
      fechaInicio: new Date(2022, 2, 1),
      fechaFin: new Date(2022, 3, 30),
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 3,
      nombre: 'ReactJS',
      comision: '33310',
      profesor: 'Arturo',
      fechaInicio: new Date(2022, 1, 1),
      fechaFin: new Date(2022, 3, 28),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 4,
      nombre: 'VueJS',
      comision: '34310',
      profesor: 'Lautaro',
      fechaInicio: new Date(2022, 5, 1),
      fechaFin: new Date(2022, 6, 30),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    }
  ];
  private cursosSubect: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursosSubect = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.cursosSubect.asObservable();
  }

  obtenerCurso(id: number): Observable<Curso[]>{
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id))
    )
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubect.next(this.cursos);
  }

  editarCurso(curso: Curso){
    let indice = this.cursos.findIndex((c: Curso) => c.id === curso.id);

    if(indice > -1){
      this.cursos[indice] = curso;
    }

    this.cursosSubect.next(this.cursos);
  }

  eliminarCurso(id: number){
    let indice = this.cursos.findIndex((c: Curso) => c.id === id);

    if(indice > -1){
      this.cursos.splice(indice, 1);
    }

    this.cursosSubect.next(this.cursos);
  }
}
