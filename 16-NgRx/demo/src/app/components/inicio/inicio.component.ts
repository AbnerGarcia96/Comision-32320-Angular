import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/cursos';
import { cursosCargados } from 'src/app/state/actions/cursos.action';
import { AppState } from 'src/app/state/app.state';
import { selectorCursosCargados } from 'src/app/state/selectors/cursos.selector';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  cursos$!: Observable<Curso[]>

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectorCursosCargados);
  }

}
