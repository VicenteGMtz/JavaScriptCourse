

//accediendo a  valores de un arreglo con destructuring



const ciudades=['londres','berlin','ciudad de mexico','toronto','otawwa','paris'];

const [
    primeraCiudad,
    segundaCiudad
] = ciudades;

console.log(primeraCiudad);
console.log(segundaCiudad);



//acceder a un solo valor ejemplo paris

const ciudadesdos=['londres','berlin','ciudad de mexico','toronto','otawwa','paris',
    {
        idioma: 'ingles'
    }];

const [,,,,,paris]=ciudadesdos;
console.log(paris);


//ejemplo avanzado


const cliente ={
    tipo:'premium',
    saldo: 1000000000,
    datos: {
        nombre:'pedro',
        app: 'pica',
        apm:'piedra',
        recidencia:{
            ciudad: 'ciudad de mexico vicente',
            pais: 'mexico',
            planeta: 'tierra',
            galaxia: 'terrricola'
        }
    },
    movimientos : ['12-03-2017','12-03-2018','12-03-2019']
}

//para aceder a las propiedades  del objetp datos se debe de tomar en cuenta que datos es el elemento padre
let {tipo,datos,movimientos,
    datos:{recidencia},
    movimientos:[uno,dos,tres]
    
} = cliente;

console.log(datos);
console.log(datos.nombre);
console.log(recidencia);
console.log(recidencia.ciudad);


//acceder al arreglo movimientos dentro de un objeto
console.log(movimientos);
//acceder a un datos del areglo movimientos
console.log(uno);
console.log(dos);
console.log(tres);