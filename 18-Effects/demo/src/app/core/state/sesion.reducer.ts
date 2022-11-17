import { Action, createReducer, on } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';
import * as SesionActions from './sesion.actions';
import { Usuario } from 'src/app/models/usuario';

export const sesionFeatureKey = 'sesion';

export const estadoInicial: Sesion = {
  sesionActiva: false
};

export const reducer = createReducer(
  estadoInicial,

  on(SesionActions.loadSesion, state => state),
  on(SesionActions.loadSesionActiva, (state, {usuarioActivo}) => {
    return {...state, sesionActiva: true, usuarioActivo: usuarioActivo}
  })

);
