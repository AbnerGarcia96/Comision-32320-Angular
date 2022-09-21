var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nombre, apellido, edad, correo, contrasena) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.correo = correo;
        _this.contrasena = contrasena;
        return _this;
    }
    Usuario.prototype.obtenerNombre = function () {
        return this.nombre + this.apellido;
    };
    return Usuario;
}(Persona));
var persona1 = new Persona("Pablo", "Lago", 15);
console.log(persona1.obtenerNombre(), persona1.obtenerApellido(), persona1.obtenerEdad());
var usuario1 = new Usuario("Mariano", "Oblitas", 26, "mariano@gmail.com", "asd.123");
console.log(usuario1.obtenerNombre());
var fecha = new Date();
console.log("Fecha: ", fecha);
var mensaje1 = 'Hola, ¿qué tal?';
var mensaje2 = "Esta semana juega Argentina vs Honduras";
var mensaje3 = mensaje1 + " " + mensaje2;
var n1 = 3;
var n2 = 2.5;
var n3 = n1 * n2;
var booleanos = false;
var opciones;
(function (opciones) {
    opciones[opciones["Si"] = 1] = "Si";
    opciones[opciones["No"] = 2] = "No";
})(opciones || (opciones = {}));
;
function imprimirMensajes() {
    console.log("Mensaje 1:", mensaje1);
    console.log("Mensaje 2:", mensaje2);
    console.log("Mensaje 3:", mensaje3);
    console.log("Numero 1:", n1);
    console.log("Numero 2:", n2);
    console.log("Numero 3:", n3);
    console.log("Booleano:", booleanos);
    console.log("Enum:", opciones);
}
imprimirMensajes();
