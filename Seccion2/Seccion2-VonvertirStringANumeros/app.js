const numero1='50',
      numero2=10,
      numero3='tres';



//console.log(numero1+numero2);
//ocupamos la funcion number para convertir 
console.log(Number(numero1)+numero2);

//de igaul forma podemos ocupar parseInt
console.log(parseInt(numero1)+numero2);

//mostrar tipo de dato antes de convertir
console.log(typeof(numero1));
console.log(parseInt(numero1));


//los strings no se pueden convertir mas bien las letras a numeros
console.log(typeof(numero3));//string
console.log(parseInt(numero3)); /*como el datos es string y por ser un palabra no se puede convertir a 
int mostrara NaN ->NOT A NOMBER*/


let dato;

dato1=Number("20");
dato2=Number('12.0002323');
//bolleano true regresa 1
dato3=Number(true);
//bolleano true regresa 0
dato4=Number(false);
//null regresa 0
dato5=Number(null);
//undefined regresa NaN
dato6=Number(undefined);
//String regresa Nan
dato7=Number('hola mundo');
//Sarreglo Nan
dato8=Number([1,2,3,4,5]);


//ParseInt ParseFloat
dato9=parseInt('100');
dato10=parseFloat('100');
dato11=parseInt('100.00');
dato12=parseFloat('10.102030');

//console.log(dato9);


//  toFixed quita los numeros decimales devuelve un numero absoluto

datox=123132123;
datox=123132123.12312312312;
console.log(datox.toFixed());
//de iagul fomra podemos elegir cuantos digitos colocando (numero)
console.log(datox.toFixed(6));
datox=

//tipo de ddato
console.log(typeof(datox));






