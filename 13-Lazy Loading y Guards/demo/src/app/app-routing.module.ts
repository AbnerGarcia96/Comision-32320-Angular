import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [AutenticacionGuard] },
  { 
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AutenticacionGuard]
  },
  { 
    path: 'autenticacion',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((m) => m.AutenticacionModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
