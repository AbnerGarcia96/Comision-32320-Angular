import { Persona } from './persona';
import { Usuario } from './usuario';

let persona1: Persona = new Persona("Pablo", "Lago", 15);
console.log(persona1.obtenerNombre(), persona1.obtenerApellido(), persona1.obtenerEdad());

let usuario1: Usuario = new Usuario("Mariano", "Oblitas", 26, "mariano@gmail.com", "asd.123");
console.log(usuario1.obtenerNombre());
console.log(usuario1.inscribir());

let fecha = new Date();
console.log("Fecha: ", fecha);