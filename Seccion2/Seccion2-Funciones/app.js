//function declaration

function saludar(nombre){
    console.log(`hola ${nombre}`);
}

/*
saludar('chente'); //llamar una funcion y madarle un argumento
saludar('mirna');
saludar('wicho');
saludar('adri');
saludar('ada');
saludar('fred');
*/

function sumar(a,b){
    //console.log(a+b);
}


sumar(34,7);
sumar(7,34);



function restar (a,b){
    return a-b;

}

let resta;
resta=restar(23,7);
resta=restar(22,7);
resta=restar(21,7);
//console.log(resta);


function hola(nombre='visitor'){
    return `hola ${nombre}`
}

let holis;
//holis=hola('chente'); //saludo con argumento
//holis=hola(); //saludo sin argumento

//console.log(holis);




//function expression

const suma=function(a,b){
    return a+b;
}

//console.log(suma(1,2));




const hi=function(nombre='stranger',edad=20,profesion='desarrollador'){
    return `hola ${nombre},tines ${edad} y eres ${profesion}`;
}

//console.log(hi('chente'));
//console.log(hi());




//+++++++++++++++++++++++ funciones IIFE

/* funciona
(function(){
    console.log('Funciones IIFE');
}());

*/


(function(tecnologia){
    console.log(`estas aprendiendo: ${tecnologia}`);
}('javaScript'));


//++++++++++++++++  funciones metodos de propiedad
//son cuando una funcion se pone dentro de un objeto


const music={
    reproducir:function(id){
        console.log(`reproducioendo musica.........con id ${id}`);
    },
    pausar:function(){
        console.log('pausando muscia');
    }
}


//tambien se pueden agregar funciones esternas al IIFE 
music.borrar=function(id){
    console.log(`borrando musica con id ${id}`);
}
music.reproducir(2);
music.pausar();
music.borrar(3223);



