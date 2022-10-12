import { Estudiante } from "./estudiante";

export interface Curso{
    nombre: string;
    comision: string;
    profesor: string;
    fechaInicio: Date;
    fechaFin: Date;
    inscripcionAbierta: boolean;
    imagen: string;
    estudiantes: Estudiante[];
}