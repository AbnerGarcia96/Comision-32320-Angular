import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../services/sesion.service';
import { selectSesionActiva } from '../../state/sesion.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sesion$!: Observable<Sesion>;

  constructor(
    private store: Store<Sesion>
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.store.select(selectSesionActiva);
  }

}
