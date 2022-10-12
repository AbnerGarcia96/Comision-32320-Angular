import { Component, Inject, OnInit } from '@angular/core';
import { Configuracion, token } from 'src/app/config';
import { Curso } from 'src/app/models/curso';
import { Estudiante } from 'src/app/models/estudiante';
import { CursoService } from 'src/app/services/curso.service';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  cursos!: Curso[];
  estudiantes!: Estudiante[];
  
  constructor(
    // private cursoService: CursoService,
    // private estudiantesService: EstudianteService
    @Inject(token) private config: Configuracion
  ) {
    console.log(token);
  }

  ngOnInit(): void {
    this.cursos = this.config.cursos.obtenerCursos();
    this.estudiantes = this.config.estudiantes.obtenerEstudiantes();
  }

}
