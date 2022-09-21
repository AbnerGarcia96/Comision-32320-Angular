export class Persona{
    protected nombre: string;
    protected apellido: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, edad: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    obtenerNombre(){
        return this.nombre;
    }

    obtenerApellido(){
        return this.apellido;
    }

    obtenerEdad(){
        return this.edad;
    }

    agregarNombre(nombre: string){
        this.nombre = nombre;
    }

    agregarApellido(apellido: string){
        this.apellido = apellido;
    }

    agregarEdad(edad: number){
        this.edad = edad;
    }
}