//objetos con todos los tipo de datos en javascript

//string


const palabra='palabra1';
const palabra2=new String('palabra');


//numeros 
const numero1=1000;
const numero2=new Number(300000);

//BOOLEANOS
const bollean1=false;
const bollean2=new Boolean(true);



///funciones

const funcion1=function(a,b){
    return a+b;

}

const funcion2=new Function('a','b','return a+b');

/*
console.log(funcion1(5,6));
console.log(funcion2(1,8));
*/

//objetos

const objeto1={
    nombre: 'vicente',
    edad:30
}
const objeto2=new Object({
    nombre:'vicente',
    edad:20
})


//array

const arreglo1=[1,2,3,4,5];
const arreglo2=new Array(1,2,3,4,5);
console.log(arreglo1);
console.log(arreglo2);


