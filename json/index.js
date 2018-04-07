console.log("iniciando");

var Informacion = {"nombre":"Herbert"}
var Datainfo = JSON.parse(Informacion);
console.log("El nombre "+Informacion.nombre);
console.log("El nombre "+Informacion["nombre"]);
