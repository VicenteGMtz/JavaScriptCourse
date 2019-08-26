//variables
const presupuestoUsuaio=prompt('cual es tu presupuesto semanal');

const formulario=document.querySelector('#agregar-gasto');

let cantidadPresupuesto;

//console.log(presupuestoUsuaio);




//clases
//clase presupuesto
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto=Number(presupuesto);
        this.restante=Number(presupuesto);
    }

    //metodo para ir restando del presupuesto acctual

    presupuestoRestante(cantidad=0){
        return this.restante-=Number(cantidad);
    }
}

//clase de interfaces maneja todo lo relacionado a html
class Interfaz{
    insertarPresupuesto(cantidad){
        ///console.log(cantidad);
        const PresupuestoSpan=document.querySelector('span#total');
        const RestanteSpan=document.querySelector('span#restante');

        PresupuestoSpan.innerHTML=`${cantidad}`;
        RestanteSpan.innerHTML=`${cantidad}`;

    }
    imprimirMensaje(mensaje,tipo){
        const divMensaje=document.createElement('div');
        divMensaje.classList.add('text-center','alert');

        if(tipo==='error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        divMensaje.appendChild(document.createTextNode(mensaje));//mensaje lo obtenemos  del dormulaio.adddevenlistener
        //insertar en el DOM

        document.querySelector('.primario').insertBefore(divMensaje,formulario);
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        },3000);
    }

    //insertar los gastos a la lista
    agregarGastolistado(nombre,cantidad){
        const gastosListado=document.querySelector('#gastos ul');
        const li=document.createElement('li');

        li.className='list-group-item d-flex justify-content-between align-item-center';

        li.innerHTML=`
                ${nombre}
               <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
        `;
        gastosListado.appendChild(li);
    }

    //comprueba el presupuesto restante
    presupuestoRestante(cantidad){
        const restante=document.querySelector('span#restante');

        //actualizamos el presupuesto restante
        const presupuestoRestanteUsuario=cantidadPresupuesto.presupuestoRestante(cantidad);
        restante.innerHTML=`${presupuestoRestanteUsuario}`;
       // console.log(presupuestoRestanteUsuario);

       this.comprobarPresupuesto();
    }

    //CAMBIA DE COLOR E PRESUPUESTO RESTANTE

    comprobarPresupuesto(){
        const presupuestoTotal=cantidadPresupuesto.presupuesto;
        const presupuestoRestante=cantidadPresupuesto.restante;
        
        //comprobar que el presupuesto total sea menor al 25%
        if((presupuestoTotal/4)>presupuestoRestante){
            const restante=document.querySelector('.restante');
            restante.classList.remove('alert-success','alert-warning');
            restante.classList.add('alert-danger');
        }else if((presupuestoTotal/2)>presupuestoRestante){
            const restante=document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');

        }
    }

}

//event listeners

document.addEventListener('DOMContentLoaded',function(){
    if(presupuestoUsuaio===null||presupuestoUsuaio===''){
        window.location.reload();

    }else{
        //intanciar presupuesto
        cantidadPresupuesto =new Presupuesto(presupuestoUsuaio);

      //  console.log(cantidadPresupuesto);

        //instanciar la clase deinterfaz

        const UI=new Interfaz();
        UI.insertarPresupuesto(cantidadPresupuesto.presupuesto);

    }

});

//FORMULARIO
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    //console.log('enviado');
    //leer formulario de gastos
    const nombreGsto=document.querySelector('#gasto').value;
    const CantidadGsto=document.querySelector('#cantidad').value;

    //instanciar la interfaz
     const UI=new Interfaz();
     if(nombreGsto===''||CantidadGsto===''){
         //2 parametros mensaje y tipo//etos parametros se ocupan en la interfaz imprimir mensaje
         UI.imprimirMensaje('hubo un error','error');
     }else{
         UI.imprimirMensaje('correcto','correcto');
         UI.agregarGastolistado(nombreGsto,CantidadGsto);
         UI.presupuestoRestante(CantidadGsto);
     }

});