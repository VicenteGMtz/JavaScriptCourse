

//instanciar ambas classes

const eventbrite =new EventBrite();
const ui=new interfaz();


//agregar event listeners

document.getElementById('buscarBtn').addEventListener('click',(e)=>{

    e.preventDefault();
    console.log('precionado ......');



    //leer el texto del input para realizar busqueda

    const textoBusccador=document.getElementById('evento').value;

    //leer el select
    const categorias=document.getElementById('listado-categorias');
    const categoriasSeleccionadas=categorias.options[categorias.selectedIndex].value;

    //console.log(textoBusccador);
    //console.log(categoriasSeleccionadas);

    //revisar que haya algo en el texto buscador
    if(textoBusccador!==''){
        //cuando existe un elemnto para buscar

        eventbrite.obtenerEventos(textoBusccador,categoriasSeleccionadas)
        .then(eventos=>{
            if(eventos.eventos.events.length>0){

                //limpiar resultados previos
                ui.limpiraResultaods();
                //SI HAY EVENTOS MOSTRAR EL RESULTADO
                ui.mostrarEventos(eventos.eventos)
                console.log(eventos.eventos)

            }else{
                //no hay eventos enviar una alerta
                ui.mostrarMensaje('No existen eventos con este nombre','alert alert-danger mt-4')
                
            }
        })
        

    }else{
        //mostrar mensaje para imprimir algo

        ui.mostrarMensaje('Ingresa algo en el buscador','alert alert-danger mt-4');
        console.log('no hay nada');
        
    }
})