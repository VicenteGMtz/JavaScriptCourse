/* los maps sirven para crear listas
que almacenan valores (llaves,valores) y 
manejan cualquier tipo de dato

*/


//declarar un map

let cliente = new Map();

//agregar datos a un map mediante set
cliente.set('nombre','vicente');
cliente.set('tipo','basico');
cliente.set('saldo',3000);

console.log(cliente);

//acceder a los valores de un map
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));




//++++    metodos que podemos implemetntar en los maps  *********************
//obtener el tamaño de un map cliente.size
console.log(cliente.size);

//comprobar que un valor existe
console.log(cliente.has('nombre'));//retorna true si es verdadero
console.log(cliente.has('apellido'));//retorna false sino existe el dato

//eliminar un dato del obejto cliente con delete pasando como prametro la llave
cliente.delete('nombre');
console.log(cliente);

//limpiar el map por completo
cliente.clear();
console.log(cliente);




/****************   
 *    pasar parametros por default a un map 
 *  
 */

 let paciente=new Map([ 
     ['nombre', 'vicente'],
     ['edad',25],
     ['enfermedad','sin enfermedades'] ]
 );

 //en esta seccion son datos que fueron asignados en caso de dejarlos en blanco se asignan 
 //valores por default dentro del map como es el nombre edad .... end¡fermedad
 paciente.set('doctor','geronimo');
 paciente.set('piso','4to');
 paciente.set('hospital','IMMS');

 console.log(paciente);

 /********************************************************* */



 /////////******    Iterar un map con un foreach */

 paciente.forEach((datos,indice)=>{
     console.log(`${datos}:${indice}`);
 })




