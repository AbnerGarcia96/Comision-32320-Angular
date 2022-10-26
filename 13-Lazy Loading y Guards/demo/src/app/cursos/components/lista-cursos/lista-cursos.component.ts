import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/cursos/services/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>

  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  eliminarCurso(id: number){
    this.cursoService.eliminarCurso(id);
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }
}
