import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const loadSesion = createAction(
  '[Sesion] Load Sesion'
);

export const loadSesionActiva = createAction(
  '[Sesion] Load Sesion Activa',
  props<{ usuarioActivo: Usuario }>()
)



