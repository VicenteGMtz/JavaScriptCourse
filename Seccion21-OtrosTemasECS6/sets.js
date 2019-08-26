
//SETS

//Permiten crear una lista de valores
// Si existen elementos con el mismo nombre los excluye
//Para obtener el tamaño de un set ocupar el size

//declarar un set
let carrito =new Set();
console.log(carrito);

//ejemplo uno 

let carrritoDos=new Set();

carrritoDos.add('camisa');
carrritoDos.add('Disco #1');
carrritoDos.add('Disco #2');
carrritoDos.add('Disco #3');
carrritoDos.add('Disco #4');

//comprobar que un valor exista = true
console.log(carrritoDos.has('camisa'));
//comprobar que un valor no  exista = false
console.log(carrritoDos.has('drogas'));

//los set generan una lista dentro de un arreglo
console.log(carrritoDos);
//saber el tamaño de un set
console.log(carrritoDos.size);




//ejemplo dos con set agregando datos directamente
let numeros=new Set([1,2,3,4,5,6,7,1,2,3,4,5,6,7]);
console.log(numeros);
console.log(numeros.size);



let paises=new Set();

paises.add('mexico');
paises.add('canada');
paises.add('alemania');
paises.add('rusia');
paises.add('suiza');
console.log(paises);


//eliminar un elemento de un set
paises.delete('rusia');
console.log('eliminadno rusia del objeto paises');
console.log(paises);

//limiando todos los elementos de un set
paises.clear();
console.log(paises);







//iinicia terar un set con foreach
let amazon=new Set();

amazon.add('traje');
amazon.add('zapatos');
amazon.add('tenis');
amazon.add('reloj');
amazon.add('camisa');

amazon.forEach((producto,index)=>{
    console.log(`${producto}: ${index}`);
})
//termina iterar un set con foreach



//convertir un set a un arreglo para poder realizaar cualquier operacion o funcion de arreglos

let sistemasOperativos=new Set();

sistemasOperativos.add('MacOS');
sistemasOperativos.add('Windows');
sistemasOperativos.add('Linux');
sistemasOperativos.add('Ubuntu');
sistemasOperativos.add('Kali linux');

const arregloSistemasOperativos=[...sistemasOperativos];
console.log(arregloSistemasOperativos);
