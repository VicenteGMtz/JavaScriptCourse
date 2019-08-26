//espresiones regulares 1


const expresion1=new RegExp('/abc/');
const expresion2= /abc/ ;


console.log(expresion1);
console.log(expresion2);


//ejemplos 

let valor,expReg;

expReg=/[0123456789]/;
expRegdos=/[0-9]/;

valor =1993;

console.log(expReg.test(valor));
console.log(expRegdos.test(valor));


//una fecha en expresion regular
expRegFecha= /\d\d-\d\d-\d\d\d\d/;
fecha ='12-12-1992';
console.log(expRegFecha.test(fecha));