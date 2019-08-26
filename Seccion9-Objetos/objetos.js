

//OBJECT LITERAL

/*
const persona={

    nombre:'vicente',
    banco:'banamex',
    saldo:10000000,
    tipoCliente :function(){
        let tipo;
        if(this.saldo>100000){
            tipo='rico';
        }else if(this.saldo>1000){
            tipo='normal';
        }else{
            tipo='pobre ';
        }
        return tipo;
    }

}

console.log(persona.tipoCliente());
*/

//enviando argumentos a los metodos

function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
    this.tipoCliente=function(){
        let tipo;
        if(this.saldo>100000){
            tipo='rico';
        }else if(this.saldo>10000){
            tipo='normal';
        }else{
            tipo='pobre';
        }

        return tipo;
    }

}

const persona=new Cliente('pedro',60000);
const personaDos=new Cliente('chente',6000000000);

console.log(personaDos.tipoCliente());