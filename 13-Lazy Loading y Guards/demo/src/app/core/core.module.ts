import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SesionService } from './services/sesion.service';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    InicioComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    SesionService
  ],
  exports:[
    
  ]
})
export class CoreModule { }
