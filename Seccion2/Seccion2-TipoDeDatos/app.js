//hay dos tipos de datos
//datos primitivos
//datos de referencia


/*********************************
 * 
 *  tipo de datos primitivos

 ++++++++++++++++++++++++++++++++++++++++*/
let valor;

//string
valor="cadena de texto";
//numero
valor=20;
//bolleano
valor= false;
//nulo
valor=null;
//indefinido
valor=undefined;
//objeto
valor={
    nombre:'juan'
}

//console.log(valor);


let valorDos;
valorDos='juan';//string
valorDos=20;//number
valorDos=30.0 //nummber
valorDos=-40;//numbre todos los numeros en javascript son de tipo number
valorDos="20"; //es un string 

//booleanos
valorDos=true;
//null
valorDos=null;//de tipo objeto
//undefined
let valortres;
//console.log(valortres);

//cuando una variale no esta definida o mas bien no tiene un valor se muestra en consola como
//variable indefinida

/********/
// simbol

valorDos=Symbol('simbolo');
/************
 * 
 * tipo de datos de referencia que abbarcan los objetos/arreglos
 * 
 * 
 * 
 * 
 * *******************/


//typeof regresa el tipo de dato


//array
valorDos=[1,2,3,4,5,6,7,8,9,10];
//objeto
valorDos={
    nombre:'juan',
    profesion:'programador'
}

//fechas
valorDos=new Date();
console.log(typeof valorDos);