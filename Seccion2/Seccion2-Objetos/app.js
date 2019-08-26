
//crear objetos

const persona={
    nombre:'vicente',
    apellido:'geronimo',
    prefesion:'maestro',
    email:'geonimo_mtz07@gmail.com',
    edad:40,
    musica:['roc','pop','salsa'],
    hogar:{
        ciudad:'guadalajara',
        pais:'mexico'
    },
    fechaCumple:function(){
        return new Date().getFullYear()-this.edad;
    }
}

//console.log(persona.musica[0]);
persona.musica.push('alternativo');//agregar en el arreglo un nuevo dato
console.log(persona.fechaCumple());//acceder a a la funcion dendtro del  objeto


//persona dos

const persona2={
    nombre:'vicente',
    apellido:'geronimo',
    prefesion:'maestro',
    email:'geonimo_mtz07@gmail.com',
    edad:26,
    musica:['roc','pop','salsa'],
    hogar:{
        ciudad:'guadalajara',
        pais:'mexico'
    },
    fechaCumple:function(){
        return new Date().getFullYear()-this.edad;
    }
}

//console.log(persona.musica[0]);
persona2.musica.push('alternativo');//agregar en el arreglo un nuevo dato
console.log(persona2.fechaCumple());//acceder a a la funcion dendtro del  objeto