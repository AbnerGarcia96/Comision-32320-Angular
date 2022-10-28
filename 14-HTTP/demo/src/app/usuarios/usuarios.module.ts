import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';


@NgModule({
  declarations: [
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
