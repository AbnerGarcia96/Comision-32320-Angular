import { Action, createReducer, on } from '@ngrx/store';
import { Inscripcion } from 'src/app/models/inscripcion';
import * as InscripcionesActions from './inscripciones.actions';

export const inscripcionesFeatureKey = 'inscripciones';

export interface InscripcionState {
  cargando: boolean;
  inscripciones: Inscripcion[]; 
}

export const initialState: InscripcionState = {
  cargando: false,
  inscripciones: []
};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.cargarInscripciones, (state) => {
    return {...state, cargando: true }
  }),
  on(InscripcionesActions.inscripcionesCargadas, (state, {inscripciones}) => {
    return {...state, cargando: false, inscripciones:inscripciones}
  }),
  on(InscripcionesActions.agregarInscripcion, (state, {inscripcion}) => {
    return state
  }),
  on(InscripcionesActions.editarInscripcion, (state, {inscripcion}) => {
    return state
  }),
  on(InscripcionesActions.eliminarInscripcion, (state, {inscripcion}) => {
    return state
  })
);
