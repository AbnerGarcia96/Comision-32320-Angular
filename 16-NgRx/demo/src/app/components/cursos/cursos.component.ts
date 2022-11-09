import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/cursos';
import { CursosService } from 'src/app/services/cursos.service';
import { cargarCursos, cursosCargados } from 'src/app/state/actions/cursos.action';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) {
    
  }

  ngOnInit(): void {
    
  }

}
