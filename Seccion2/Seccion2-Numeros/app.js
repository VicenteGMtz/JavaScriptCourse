//numeros en javaScript


const numero1=30;
const numero2=20;
const numero3=2.5;
const numero4=-4;
const numero5=.00003;

let resultado;

//suma
resultado=numero1+numero2;
//resta
resultado=numero3-numero1;
//multiplicacion
resultado=numero1*numero1;
//division
resultado=numero5/numero1;

//modulo es el reciduo de una division
resultado=numero1%14;

//pi
resultado=Math.PI;
//redondeo
resultado=Math.floor(2.098764);
//raiz cuadrada
resultado=Math.sqrt(64);
//numero absoluto
numerox=-10;
resultado=Math.abs(numerox);//convierte el negativo en absoluto seria positivo 10
//potencia
resultado=Math.pow(8,5);
//minimo
resultado=Math.min(9,5,7,82,4); //min regresa el numero minimo
//random numero aleatorio
resultado=Math.random();


//orden de las operaciones

resultado=10+20-30+5/2;



console.log(resultado);
