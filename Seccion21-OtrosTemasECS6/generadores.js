//generadores

function *crearGenerarador(){
    //yield
    yield 1;
    yield 'nombre';
    yield 5+6;
    yield false;

}

const iterador = crearGenerarador();

//ieracion de los valores
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);








//ejemplo dos iterando un arreglo 

function *generadorDos(carrito){
    for(let i=0;i<carrito.length;i++){
        yield carrito[i];
    }
}

// creamos el carrito
const carrito=['producto1', 'producto2', 'producto3','prodcuto4'];

let iteradordos=generadorDos(carrito);
console.log(iteradordos.next().value);
console.log(iteradordos.next().value);
console.log(iteradordos.next().value);
console.log(iteradordos.next().value);
console.log(iteradordos.next().value);

