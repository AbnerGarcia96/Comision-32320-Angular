import { InjectionToken } from "@angular/core";
import { CursoService } from "./services/curso.service"
import { EstudianteService } from "./services/estudiante.service"

export interface Configuracion{
    // servicios: {
        cursos: CursoService,
        estudiantes: EstudianteService
    // }
};

export const config: Configuracion = {
    // servicios: {
        cursos: new CursoService(),
        estudiantes: new EstudianteService()
    // }
};

export const token = new InjectionToken<Configuracion>('configuracion')