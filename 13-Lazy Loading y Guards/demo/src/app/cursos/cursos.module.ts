import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoService } from './services/curso.service';
import { SharedModule } from '../shared/shared.module';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';


@NgModule({
  declarations: [
    ListaCursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    CursosInicioComponent,
    DetalleCursoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CursosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
