import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, interval, map, mergeMap, Observable, of } from 'rxjs';
import { Curso } from './models/curso';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  cursos!: Curso[];  
  cursos$: Observable<Curso[]>;
  suscripcion: any;
  promesa: any;
  merge$!: Observable<any>;

  constructor(
    private cursoService: CursoService
  ){
    console.log('Paso 1');
    //Paso 2
    this.promesa = cursoService.obtenerCursosPromise()
    // .then((valor: Curso[]) => {
    //   console.log('Desde el promise', valor);
    //   this.cursos = valor;
    // }).catch((error: any) => {
    //   console.error(error);
    // });

    this.suscripcion = cursoService.obtenerCursosObservable().subscribe({
      next: (cursos: Curso[]) => {
        this.cursos = cursos;
        // console.log('Desde el observable', cursos);
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.cursos$ = cursoService.obtenerCursosObservable();
    console.log('Paso 3');
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    // of(this.cursos).pipe(
    //   map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.nombre === 'Kotlin'))
    // ).subscribe((cursos) => {
    //   console.log('Desde el of: ', cursos);
    // });
    
    // from(this.cursos).pipe(
    //   filter((curso: Curso) => curso.nombre === 'Angular')
    // )
    // .subscribe((cursos) => {
    //   console.log('Desde el from: ', cursos);
    // });

    // of(this.cursos).pipe(
    //   mergeMap(
    //     (cursos: Curso[]) => interval(1000).pipe(map(i => i + cursos[i].nombre)) 
    //   )
    // ).subscribe(cursos => console.log('Utilizando mergemap', cursos));

    this.merge$ = of(['a', 'b', 'c', 'd']).pipe(
      mergeMap(
        letras => interval(2000).pipe(
          map((i) => i + letras[i])
        )
      )
    );
  }

  agregarCurso(){
    let curso: Curso = {
        nombre: 'TypeScript',
        comision: '32320',
        profesor: 'Jesica',
        fechaInicio: new Date(),
        fechaFin: new Date()
      }
    this.cursoService.agregarCurso(curso);
  }
}
