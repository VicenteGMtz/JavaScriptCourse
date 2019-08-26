//foreach

const pendientes=['tarea','comer','cojer','correr','cantat'];


pendientes.forEach(function(pendiente,index){
    //console.log(`${index}:${pendiente}`);
});
//console.log(pendientes);


//map para recorrer un arreglo de objetos


const carrito=[
    {id:1, producto: 'libro'},
    {id:2, producto: 'lapiz'},
    {id:3, producto: 'lapicero'},
    {id:4, producto: 'cuaderno'},

];

const nombreProducto=carrito.map(function(carrito){
    return carrito.producto;

});

//console.log(nombreProducto);
//console.log(carrito);


const automovil={
    modelo:'camaro',
    motor:6.1,
    anio:1234,
    marca:'chevrolet'
}

for(let auto in automovil){
    console.log(`${auto}:${automovil[auto]}`);
}
console.log(automovil);