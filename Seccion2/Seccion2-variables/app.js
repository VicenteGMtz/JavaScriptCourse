//var
//let 
//const


//las variable no pueden tener nuemeros al nicio
//no pueden tenre caracteres especiales al inicio
//crear variables significativas correspondientes a lo que se pueda recordar

/**************************************
 * 
 *       var     }
 * se pueden derscribir las 
 * variable incluso poniendo el sufijo var 
 *            
 **************************************/
var nombre="juan";
nombre="luis";

//nombrar variables
var primerNombre="vicente";   //camelcase
var primer_nombre="geronimo"; //underscore
var PrimerNombre="vicente";   //pascal case



/** *********************************
 *                                  *
 *              let    
 * 
 * 
 *  no se puede rescribir una variable como var
 * ejemplo let chente="vicente";
 *          let chente="vicente uno";
 * 
 * 
 * tiene que ser de la siguiente forma
 *        let chente="vicente";
 *            chente="vicente dos";
 * **********************************/

 let chente="vicente";
 let producto="libro";
 let primero;
 primero="chente";
 console.log(chente,primero);



 /******************************************************    
  *                       const 
  * 
  * las constantes deben de inicializarse siempre
  * no pueden cambiarse sus valores
  * 
  */

  const ptos ="cama";

  //console.log(ptos);


  //strings 

  let name,mensage;

  name='visual studio';
  name="visualStudio";

   //concatenar
  mensaje='java'+'script';
  
  //concatenar variables
  let aprender='saber', saber='cojer';
  console.log(`${aprender}${saber}`);//templates liiterals nueva forma javaScript

  
  



