"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var usuario_1 = require("./usuario");
var persona = new persona_1.Persona("Pablo", "Lago", 15);
var usuario = new usuario_1.Usuario("Abner", "Garcia", 26, "abner@gmail.com", "asd.123");
var n1 = 0;
function verificarObjeto(objeto) {
    if (objeto instanceof usuario_1.Usuario) {
        return "Hola " + objeto.obtenerNombre() + " tu correo es " + objeto.obtenerCorreo();
    }
    else if (objeto instanceof persona_1.Persona) {
        return "Hola " + objeto.obtenerNombre();
    }
    else {
        return "Objeto no determinado";
    }
}
console.log(verificarObjeto(persona));
console.log(verificarObjeto(usuario));
console.log(verificarObjeto(n1));
