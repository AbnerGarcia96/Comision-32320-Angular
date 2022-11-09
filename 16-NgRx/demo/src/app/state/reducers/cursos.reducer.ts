import { createReducer, on } from "@ngrx/store";
import { CursoState } from "src/app/models/curso.state";
import { cargarCursos, cursosCargados } from "../actions/cursos.action";

const estadoInicial: CursoState = {
    cargando: false,
    cursos: []
}

export const cursosReducer = createReducer(
    estadoInicial,
    on(cargarCursos, (estado) => {
        const estadoNuevo: CursoState = {
            cargando: true,
            cursos: estado.cursos
        }
        return estadoNuevo
    }),
    on(cursosCargados, (estado, { cursos }) => {
        const estadoNuevo: CursoState ={
            cargando: false,
            cursos: cursos
        }

        return estadoNuevo
    })
)