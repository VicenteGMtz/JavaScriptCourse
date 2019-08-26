
//OBJRTO DATE

const diaHoy=new Date();
console.log(diaHoy);


let    micumple=new Date('07-28-2011');
//console.log(micumple);

let mes;
let dia;
let año;
let minutos;
let segundos;
let hora;
let milisegundos;
//imprimer mes actual de la fecha diahoy que es el dia actual
mes=diaHoy.getMonth();
dia=diaHoy.getDate();
año=diaHoy.getFullYear();
hora=diaHoy.getHours();
minutos=diaHoy.getMinutes();
milisegundos=diaHoy.getTime();//milisegundos desde 1970

console.log(mes);
console.log(dia);
console.log(año);
console.log(hora);
console.log(minutos);
console.log(milisegundos);



//metodo set para agregar establecer un valor

const Renta=new Date();

let mirenta;
 mirenta=Renta.getFullYear();
 mirenta=Renta.setFullYear('2090');
 mirenta=Renta.getFullYear();

 console.log(mirenta);


