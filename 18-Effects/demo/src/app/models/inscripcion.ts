import { Curso } from "./curso";
import { Usuario } from "./usuario";

export interface Inscripcion{
    id: number;
    estudiante: Usuario;
    curso: Curso;
}