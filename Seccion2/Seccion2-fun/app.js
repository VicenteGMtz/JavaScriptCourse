

  let name,mensage;

  name='visual studio';
  name="visualStudio";

   //concatenar
  mensaje='java'+'script';
  
  //concatenar variables
  let aprender='saber', saber='cojer';



  //funciones de javaScript

  //.lenght saber el tamaño de una cadena
  console.log(aprender.length);

  //concatenar

  console.log(aprender.concat(' ' ,'cojer es genial'));
//minusculas
  console.log(aprender.toLowerCase());
  //mayusculas
  console.log(aprender.toUpperCase());

  //encontrar la posicion que ocupa una palabra
  let badWords="hijo de tu puta madre"+" \n";
  console.log(badWords.indexOf('puta'));


  let nombrePaterno="geronimo";
  let nombreMaterno="martinez";
  let curp="RSA2608VGM280793";

   //substring es para tomar caracteres de la posicion que pongamos empezando desde cero izquierda a derecha
  nombrePaterno=nombrePaterno.substring(0,3);
  nombreMaterno=nombreMaterno.substring(0,5);
  curp=curp.substring(0,7);

  //mostrar las variables
  console.log(nombrePaterno,nombreMaterno,curp);

  //concatenar
  console.log(`${nombrePaterno}${nombreMaterno}${curp}`);//templates liiterals nueva forma javaScript
  
//metodo split es similar a substring 

let compu="asus esta de poca madre";
let compudos="dell tambien";

console.log(compu.slice(3,10));


//split separa separar palabras de acuerdo a lo que coloquemos en este caso espaciosn en blanco
//devolviendo un arreglo
console.log(compu.split(' '));


//repplace remplaza lo que nosotros asignemos 
console.log(compu.replace('asus','tu jefa'));

//includes busca un valor dentro de una cadena de texto
//si lo encuentra regresa true de lo contrario false
console.log(compu.includes('asus'));

//repeat repetir un valor las veces que sea necesarios
console.log(badWords.repeat(10));



