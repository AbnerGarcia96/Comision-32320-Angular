import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoAlphaService } from 'src/app/services/curso-alpha.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos!: Curso[];
  
  constructor(
    private cursoService: CursoService,
    private cursoAlphaService: CursoAlphaService
  ) {
    console.dir(cursoService);
    console.dir(cursoAlphaService);
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.obtenerCursos();
  }

  agregarCurso(){
    let curso: Curso = {
      nombre: 'Angular Avanzado',
      comision: '22234',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      imagen: '',
      profesor: 'Giancarlo Oblitas',
      inscripcionAbierta: true,
      estudiantes: [
        { nombre: 'Jesica', apellido: 'Wulfson', usuario: 'jwulfson', contrasena: '1234'}
      ]
    };

    this.cursoService.agregarCurso(curso);
  }
}
