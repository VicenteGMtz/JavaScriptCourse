

const cotizador =new API('726f0ca733967ca5361069f9d48537039acc362e2bb07dd4b7b2572537cb282d');
const interfaz =new UI();





const formulario=document.querySelector("#formulario");


formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    //leer la moneda seleccionada

    const monedaSelect=document.querySelector("#moneda");
    const monedaSeleccionada=monedaSelect.options[monedaSelect.selectedIndex].value;


    //leer la criptomoneda seleccionada
    const criptoSelect=document.querySelector("#criptomoneda");
    const criptoSeleccionada=criptoSelect.options[criptoSelect.selectedIndex].value;

    //comprobar que ambos campos tengan algo seleccionado

    if(criptoSeleccionada==='' || monedaSeleccionada===''){
        //alerta de error
        interfaz.mostrarMensae('los campos son obligatorios','alert bg-danger text-center');
    }else{
        //consultar la api
        cotizador.obtenerValores(monedaSeleccionada,criptoSeleccionada)
        .then(data=>{
            
            interfaz.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoSeleccionada);
        })
    }
})