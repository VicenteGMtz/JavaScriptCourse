
class Cliente{
    constructor (nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }

    imprimirSaldo(){
        return `hola ${this.nombre}, tu saldo hasta el momento es: ${this.saldo}`;
    }

    //metodo estaticos

    static bienvenida(){
        return 'bienvenido al cajero';
    }
}

class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,tipo){
        //va hacia el contructor padre
        super(nombre,saldo);
        //no existen en el contructor padre
        this.telefono=telefono;
        this.tipo=tipo;
    }
    static bienvenida(){
        return 'bienvenido al cajero para empresas';
    }
}

const Cliente1=new Cliente('vicente',30005);
const Empresa1=new Empresa('gtec',1000000,23232323,'tics');
console.log(Cliente1);
console.log(Empresa1);

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
