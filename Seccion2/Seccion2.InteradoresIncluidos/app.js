const ciudades=['guadalajara','puebla','monterrey','oaxaca'];
const ordenes= new Set([123,321,213,312,789]);
const datos=new Map();
datos.set('nombre','vicnete');
datos.set('profesion','desarrollador');


/**
console.log(ciudades);
console.log(ordenes);
console.log(datos); */


//******************** */Entries interador******************
/*entries a las ciudaddes

for(let entrada of ciudades.entries()){
    console.log(entrada);
}
*/


/*entries de las ordenes
for(let entradas of ordenes.entries()){
    console.log(entradas);
}

*/


/* entries para el MAP 

for(let entrada of datos.entries()){
    console.log(entrada);
}*/








//entries regresa llaves y valores
for(let entrada of datos.entries()){
   // console.log(entrada);
}

//values solo regresa los valores
for(let entrada2 of datos.values()){
   // console.log(entrada2);
}

//keys regresa las llaves o id de los valores
for(let entrada3 of ciudades.keys()){
   // console.log(entrada3);
}

//default sin poner o especificar el metodo 

for(let entrada4 of ciudades){
   // console.log(entrada4);
}





/////////////////////////////////////////////
////// iteradores para strings

const mensaje='aprendiendo javascript';

for(let letra of mensaje){
    //console.log(letra);
}




const enlaces=document.getElementsByTagName('a');
for(let enlace of enlaces){
    console.log(enlace.href);
}

