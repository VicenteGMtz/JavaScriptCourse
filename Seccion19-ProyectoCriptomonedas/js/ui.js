

class UI{


    constructor(){
        this.init();
    }

    init(){
        this.construirSelect();
    }



    
    construirSelect(){
        
        cotizador.obtenerTodasLasMonedas()
                 .then(monedas=>{

                   // console.log(monedas);

                    //crear un select de opciones 

                    const select=document.querySelector("#criptomoneda");

                    //iterar los resultados de la api criptomenedas
                    for(const [key, value] of Object.entries(monedas.monedas.Data)){
                        //console.log(value);

                        //añadir el simbolo  y ek nombre como opciones

                        const ocpion=document.createElement('option');
                        ocpion.value = value.Symbol;
                        ocpion.appendChild(document.createTextNode(value.CoinName));

                        select.appendChild(ocpion);
                        

                    }
                     
                 })


    }

    //CREAR UN METODO PARA MOSTRAR LOS MENSAJES YA SEAN DE ERROR O DE SUCCESS

    mostrarMensae (mensaje,clases){
        const div=document.createElement('div');
        div.className=clases;
        div.appendChild(document.createTextNode(mensaje));

        //eleccionar mensaje

        const divMensaje=document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();

        },3000)
    }

    //imprime el resultado de la cotizacion de la criptomoneda

    mostrarResultado(resultado,moneda,crypto){

        //en caso de un resultado anterios
        const resultadoAnterior=document.querySelector('#resultado > div');

        if(resultadoAnterior){
            resultadoAnterior.remove();
        }
     
        const datosMoneda=resultado[crypto][moneda];

        //recortar digitos del precio

        console.log(datosMoneda);
        let precio=datosMoneda.PRICE.toFixed(2);

        let porcentaje=datosMoneda.CHANGEPCTDAY.toFixed(2);
        let actualizacion= new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');
                //construir el template

        let templateHtml=`
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title" >Resultado: </h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} 
                     a moneda ${datosMoneda.TOSYMBOL}
                      es de: ${precio}</p> 
                    <p>Variaciòn ultimo dìa % ${porcentaje}</p>
                    <p>Ultima actualizacion ${actualizacion}</p>
                </div>
            </div>
        `;

       
        this.ocultarMostrarSpinner('block');

        setTimeout(() => {
             //insertar el resultado
             document.querySelector("#resultado").innerHTML=templateHtml;
             this.ocultarMostrarSpinner('none');
        }, 3000);

    }

    //mostrar spinner
    ocultarMostrarSpinner(mostrar){
        const spinner=document.querySelector('.contenido-spinner');
        spinner.style.display=mostrar;
    }

}