// Symbols
//permiten crear propiedades unicas
//cada symbol que se genera es ùnico




const simbolo = Symbol();

const simboloDos= Symbol('descripcion para el symbol');



console.log(simbolo);
console.log(simboloDos);




//ejemplo practico de symbol

let nombre = Symbol();
let apellido=Symbol();
//crear un objeto persona
let persona={}

persona.nombre='vicente';
persona[nombre]='vicente';
persona[apellido]='Gerónimo'
persona.saldo=100;
persona.tipoCliente='normal';

console.log(persona);

//aceder al nombre de la persona con el objeto
console.log("accediendo al nombre "+persona.nombre+" mediante el uso del objeto persona.nombre");
//aceder al nombre de la persona con symbol
console.log("accediendo al nombre "+persona[nombre]+" con symbol");



