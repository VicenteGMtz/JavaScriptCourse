
//arrreglo de numeros
const numeros=[1,2,3,4,5];
//console.log(numeros);







//arreglo de strings
const meses=new Array('enero','febreo','marzo');
//console.log(meses);
//console.log(meses.length); //tamaño del arreglo 
//console.log(Array.isArray(meses)); //comprobar si un arreglo es realmente un arreglo

/**añadir un nuevo dato al arreglo */
meses[3]='abril';
meses.push('mayo'); //agregar un nuevo mes y agregarlo al final
//console.log(meses);
//console.log(push(meses);



//arreglo meszclado
const mezclado=new Array('hola',20,true,false,null,undefined);
//console.log(mezclado);


 
//encontrar un elemento en el arreglo del arreglo meses
//console.log(meses.indexOf('abril'));//regresa la posicion en que se necuenta el arreglo

//agregar en dato al inicio del arrglo

meses.unshift('mes 0');

//eliminar un elemneto del final del con arrglo pop
meses.pop();
//eliminar un elemento al pricipio del arreglo
meses.shift();
//eliminar un elemento en un rango
meses.splice(2,1);
//mwtodo para revertir u ordenar meses
meses.reverse();

//console.log(meses);




//unir un arreglo con otro
let arreglo1=[1,2,3];
    arreglo2=[9,8,7];
//console.log(arreglo1.concat(arreglo2));


//ordenar un arreglo
const frutas=['platano','pera','manzana','zanahoria','durazno','naranja','guayaba'];
//ordenar con sort
frutas.sort();
//console.log(frutas);


//ordenar numeros creamos una  con sort
let numbers=[1,5,6,3,8,9,12,100,34,24];
//ordenar de menor a mayor
numbers.sort(function(x,y){
    return x-y;

});
//ordenar de mayor a menor
numbers.sort(function(x,y){
    return y-x;

});

console.log(numbers);


