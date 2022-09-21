import { Inscripcion } from './inscripcion';
import { Persona } from './persona';

export class Usuario extends Persona implements Inscripcion{
    private correo: string;
    private contrasena: string;
    nombreClase: string;
    fecha: Date;

    constructor(nombre: string, apellido: string, edad: number, correo: string, contrasena: string){
        super(nombre, apellido, edad);
        this.correo = correo;
        this.contrasena = contrasena;
    }

    obtenerNombre(): string {
        return this.nombre + this.apellido;
    }

    inscribir(){
        return 'Inscribiendo usuario';
    }
}