/*ITERADORES
OFRECEN MAS FLEXIBILIDAD Y CONTROL EN EL CODIGO */

//la ventaja de interador es que tenemos el control total en cada interacion 
//
function crearIterador(carrito){
    //inicializar el indice
    let i=0;
    return{
        //arrow functions
        siguiente:() =>{
            let fin=(i>=carrito.length);

            let valor=!fin ? carrito [i++] : undefined;

            return {
                fin: fin,
                valor: valor
            }


        }
    }

}

const carrito=['producto1','producto2','producto3','producto4'];
const recorrerCarrito=crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());