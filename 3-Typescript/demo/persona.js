"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Persona.prototype.obtenerApellido = function () {
        return this.apellido;
    };
    Persona.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Persona.prototype.agregarNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.agregarApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.agregarEdad = function (edad) {
        this.edad = edad;
    };
    return Persona;
}());
exports.Persona = Persona;
