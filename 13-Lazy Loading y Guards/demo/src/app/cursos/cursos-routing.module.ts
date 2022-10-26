import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const routes: Routes = [
  { path: '', component: CursosInicioComponent, children: [
    { path: 'listar', component: ListaCursosComponent },
    { path: 'editar', component: EditarCursoComponent },
    { path: 'agregar', component: AgregarCursoComponent, canActivate: [AdminGuard] },
    { path: ':id', component: DetalleCursoComponent}
  ]} 
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
