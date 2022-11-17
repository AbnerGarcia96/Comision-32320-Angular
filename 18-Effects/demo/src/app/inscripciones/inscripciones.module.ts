import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaIncripcionesComponent } from './components/lista-incripciones/lista-incripciones.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './state/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeatureKey, reducer } from './state/inscripciones.reducer';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';


@NgModule({
  declarations: [
    ListaIncripcionesComponent,
    EditarDialogComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscripcionesFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects])
  ]
})
export class InscripcionesModule { }
