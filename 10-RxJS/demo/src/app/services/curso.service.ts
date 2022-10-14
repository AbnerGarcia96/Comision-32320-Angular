import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursos: Curso[] = [{
    nombre: 'Angular',
    comision: '32320',
    profesor: 'Jesica',
    fechaInicio: new Date(),
    fechaFin: new Date()
  },{
    nombre: 'ReactJS',
    comision: '32320',
    profesor: 'Jesica',
    fechaInicio: new Date(),
    fechaFin: new Date()
  },{
    nombre: 'Kotlin',
    comision: '32320',
    profesor: 'Jesica',
    fechaInicio: new Date(),
    fechaFin: new Date()
  }];
  cursos$: Observable<Curso[]>;
  cursosSubject: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);

    this.cursos$ = new Observable<Curso[]>((suscriptor) => {
      suscriptor.next(this.cursos);

      setTimeout(() => {
        this.cursos.push({
          nombre: 'VueJS',
          comision: '32320',
          profesor: 'Jesica',
          fechaInicio: new Date(),
          fechaFin: new Date()
        });
        suscriptor.next(this.cursos);
      }, 2000)
    })
  }

  obtenerCursosPromise(): Promise<Curso[] | any>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay cursos disponibles en este momento'
        });
      }
    });
  }

  obtenerCursosObservable(){
    return this.cursosSubject.asObservable();
    // return this.cursos$;
    // return of(this.cursos);
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }
}
