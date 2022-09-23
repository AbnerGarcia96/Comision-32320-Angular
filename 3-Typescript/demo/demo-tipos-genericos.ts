import { Persona } from "./persona"
import { Usuario } from "./usuario";

let persona: Persona = new Persona("Pablo", "Lago", 15);
let usuario: Usuario = new Usuario("Abner", "Garcia", 26, "abner@gmail.com", "asd.123");
let n1: number = 0;

function verificarObjeto<T>(objeto: T){
    if(objeto instanceof Usuario){
        return "Hola " + objeto.obtenerNombre() + " tu correo es " + objeto.obtenerCorreo();
    }else if(objeto instanceof Persona){ 
        return "Hola " + objeto.obtenerNombre();
    }else{
        return "Objeto no determinado";
    }
}

console.log(verificarObjeto<Persona>(persona));
console.log(verificarObjeto<Usuario>(usuario));
console.log(verificarObjeto<number>(n1));