//funcion object create en los  prototypes


const cliente={
    imprimirNombre:function(){
        return `tu nombre es ${this.nombre},tu edad ${this.edad}`
    },

    añoNacimiento:function(){
        var fecha = new Date();
         var year = fecha.getFullYear();
        return `naciste en el año ${year-=this.edad}`
    }

}


const vicente=Object.create(cliente);

vicente.nombre='vicente';
vicente.edad=25;

console.log(vicente.añoNacimiento());