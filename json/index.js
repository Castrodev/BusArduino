console.log("iniciando");

var Informacion = {"nombre":"Herbert"}
//var Datainfo = JSON.parse(Informacion);
//console.log("El nombre "+Informacion.nombre);
//console.log("El nombre "+Informacion["nombre"]);

//libreria fs ya viene instalada
var fs = require("fs");

//Instruccion para leer la data del archivo JSON
var Archivo = fs.readFileSync("data.json");

//Convertimos el archivo a un archivo JSON
var DataArchivo = JSON.parse(Archivo);

console.log ("El correo es  "+DataArchivo.correo);

DataArchivo.edad = 12;
DataArchivo["sexo"] = "M";
var GuardarArchivo = JSON.stringify(DataArchivo);
fs.writeFileSync ('data.json', GuardarArchivo);
