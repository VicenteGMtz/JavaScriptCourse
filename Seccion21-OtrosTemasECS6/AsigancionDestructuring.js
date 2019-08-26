

//CREAR OBJETOS Y ACCESDER A LOS DATOS  MEDIANTE JAVASCRIPT ANTIGUO
const Cliente={
    nombre: 'vicente',
    edad: '26'
}


let nombre=Cliente.nombre, edad=Cliente.edad;

/**

console.log(nombre);
console.log(edad);

 */



//CREAR OBJETOS MEDIANTE ECMASCRIPT 6 >> mediante DESTRUCTURING
//nota: Usando el distructuring siempre buscará un arreglo o un objeto no tomará en cuenta las variables globales  que se 
//quieran rescribir


const Coche={
    marca: 'audi',
    color: 'plateado'
}

let {marca,color} = Coche;

console.log(marca);
console.log(color);


//objetos dentro de objetos con destructuring

const Programador = { 

    level: 'junior',
    lenguague: 'java',
    datos : {
        ubicacion : {
            ciudad: 'Ciudad de México',
            pais: 'México'

        },
        cuenta :{
            desde: '2019-12-12',
            saldo: 1020202
        }
    }
}

let {datos: {ubicacion}} = Programador;

console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);


//inicializar valores por defautl


let {datos: {cuenta}} = Programador;

console.log(cuenta.desde);
console.log(cuenta.saldo);


const clientedos={
    nombredos : 'nombre',

}

let {nombredos,tipodos='default',saldodos=0}=clientedos;

console.log(nombredos);
console.log(tipodos);
console.log(saldodos);



