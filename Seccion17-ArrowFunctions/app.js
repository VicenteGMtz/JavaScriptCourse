

//

let aprendiendo;
aprendiendo= function(){
    console.log("aprendiendo javascript");
    
}

//funcion utilizano arrow function

aprendiendo=()=>{
    console.log("arrow functions es otra forma de declarar una funcion");
}

//una linea no requiere llaves 
aprendiendo=()=> console.log("arrow functions sin llaves");


//retorna valor
aprendiendo=()=>'imprimir u texto directamente';

//retorna un objrto
aprendiendo=()=>({aprendiendo: 'aprendienodo javascript'});

//pasar parametros
aprendiendo=(tecnologia)=>console.log(`aprendiendo ${tecnologia}`);
//aprendiendo('javascript');


//paaar un parametro
aprendiendo=tecnologia=>console.log(`aprendiendo ${tecnologia}`);
//aprendiendo('javascript');


//pasando dos parametros
aprendiendo=(tec1,tex2)=>console.log(`aprendiendo ${tec1} y ${tex2}`);
aprendiendo('javascript','ecs6');




const productos=['disco','amisa','guitarra'];


const letrasProducto=productos.map(function(producto){
    return producto.length;
})
console.log(letrasProducto);


//callback con parentiseis en producto
const letrasProductodos=productos.map((producto)=>{
    return producto.length;
})
console.log(letrasProductodos);


//callback sin oarentesis en producto
const letrasProductotres=productos.map(producto=>{
    return producto.length;
})
console.log(letrasProductotres);

//calback en una sola linea con un solo paremtro
const letrasProductoscuatro=productos.map(producto=>producto.length);
console.log(letrasProductoscuatro);



//impeementadno arrow fucntion en foreach

//foreaah tradicional
productos.forEach(function(producto){
    console.log(producto);
})

//foreach con arrow function
productos.forEach((producto)=>{
    console.log(producto);
})

//foreach en una sola linea
productos.forEach(producto=> console.log(producto)); 
