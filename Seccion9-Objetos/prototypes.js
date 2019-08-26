
function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;  
}

//creando un prototype 
Cliente.prototype.tipoCliente=function(){
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

//creando un segundo prototype

Cliente.prototype.infoCliente=function(){
    return `Nombre: ${this.nombre}, tu saldo es: ${this.saldo}, y perteneces al tipo de los ${this.tipoCliente()}`;
}


//retirar saldo

Cliente.prototype.retiroEfectivo=function(retiro){
    return this.saldo-=retiro;
}

/*
const cliente1=new Cliente('vicente',50000);
console.log(cliente1.tipoCliente());
*/

const cliente1=new Cliente('vicente',2342342342);
const cliente2=new Cliente('geronimo',2342);
const cliente3=new Cliente('martinez',223232);

//cliente2 hace un retiro de 2000
cliente2.retiroEfectivo(2000);

/**
 * 
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

 */

console.log(cliente1.infoCliente());
console.log(cliente2.infoCliente());
console.log(cliente3.infoCliente());