import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripciones from './inscripciones.reducer';

export const selectInscripcionesState = createFeatureSelector<fromInscripciones.InscripcionState>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectInscripcionesCargando = createSelector(
  selectInscripcionesState,
  (state) => state.cargando
)

export const selectInscripciones = createSelector(
  selectInscripcionesState,
  (state) => state.inscripciones
)