
//arreglo de objetos

const auto=[
    {modelo: 'Mustang',motor:6.0},
    {modelo: 'Camaro',motor:7.0},
    {modelo: 'Ferrari',motor:7.0},
];

//console.log(auto);
//console.log(auto[0].modelo);

//recorremos el arreglo de objetos con un for
console.log(auto.length);//identificamos el tamaño del arreglo
/*for(let i=0;i<=auto.length;i++){
    
    console.log(`${auto[i].modelo}${auto[i].motor}`)
} */

//modificar los valores de un objeto
auto[0].modelo='Audi';
console.log(auto);

