
class Cliente{
    constructor (nombre,apellido,saldo){
        this.nombre=nombre;
        this.apellido=apellido;
        this.saldo=saldo;
    }

    imprimirSaldo(){
        return `hola ${this.nombre}, tu saldo hasta el momento es: ${this.saldo}`;
    }

    tipoCliente(){
        let tipo;
        if(this.saldo>100000){
            tipo='rico';
        }else if(this.saldo>1000)
        {
            tipo='normal';
        }else{
            tipo='pobre';
        }
        return tipo;
    }

    retirarSaldo(retiro){
        return this.saldo-=retiro;

    }

    //metodo estaticos

    bienvenida(){
        return 'bienvenido al cajero';
    }
}

//crear una instancia de un objeto

const vicente=new Cliente('vicente','geronimo',1000000);


//imprimiendo la instancia 

console.log(vicente);
console.log(vicente.imprimirSaldo());
console.log(vicente.tipoCliente());
vicente.retirarSaldo(6000);
console.log(vicente.imprimirSaldo());
console.log(vicente.bienvenida());