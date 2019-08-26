

const nombre='juan';
//lenght solo se usa para strings
console.log(nombre.length);


let cp;//codigo postal

cp=112345; //es un numero
console.log(typeof(cp));//mostramos tipo de dato numero
cp=String(cp); //convertimos a cadena
console.log(typeof(cp));//mostramos tipo de dato string
console.log(cp.length); //mostramos tamaño de la cadena

let num;
num='4'+'4';
console.log(num.length);


//booleano

num2=false;
num3=[1,2,4];

console.log(num2);
console.log(num2.length);//no se puede aplicar a booleanos
console.log(typeof(num2));
console.log(num2);

console.log(num3);
console.log(num3.length);//no se puede aplicar a booleanos
console.log(typeof(num3));


//tostring

num4=30;
num4=num4.toString();
console.log(num4)
console.log(typeof(num4));