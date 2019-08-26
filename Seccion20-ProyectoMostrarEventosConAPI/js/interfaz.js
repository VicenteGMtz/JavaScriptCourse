

class interfaz{
    constructor(){

        //inicializa la app al instancias
        this.init();

        //leer el resultado
        this.listado=document.getElementById('resultado-eventos');

    }


    //metodo pra inicializar la app
    init() {
        this.imprimirCategorias();

    }


    //imprimir categorias
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias =>{

                const cats=categorias.categorias.categories;
                const Selectlistado=document.getElementById('listado-categorias');
                //rrecorremocs el arreglo e imprimimos los opcions
                cats.forEach(cat => {
                    const opcion=document.createElement('option');
                    opcion.value=cat.id;
                    opcion.appendChild(document.createTextNode(cat.name_localized));
                    Selectlistado.appendChild(opcion);
                    
                });

            })
    }

    //lee la respuesta de la api e imprime los resultadso
    mostrarEventos(eventos){

        //los eventos y agregarlos auna variable
        const listaEventos=eventos.events;
      
        listaEventos.forEach(evento =>{
            this.listado.innerHTML +=`

                <div class="col-md-4 mb-4">
                    <div class="card">
                       
                          <img class="img-fluid mb-2" src="${evento.logo !==null ? 
                        evento.logo.url : ''}">
                      
                        <div class="card-body">
                          <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Inofrmacòn del evento</p>
                                <p>${evento.description.text.substring(0,280)}...</p
                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-primary ">Fecha y hora: ${evento.start.local}</span>
                                <a  href="${evento.url}" target="_blank" class="btn btn-success btn-block mt-4">Comprar boletos...</a>
                            </div>
                          </div>
                        </div>

                    </div>
                </div
            `;

        })

        
        

    }

    //limpiar busquedas existeentes antes de realizar una nueva busqueda
    limpiraResultaods(){
        this.listado.innerHTML='';
    }

    //metodo pra imprimir mensajes

    mostrarMensaje(mensaje,clases){
        const div=document.createElement('div');

        div.classList=clases;
        //agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //buscar un padre
        const buscadorDiv=document.getElementById('buscador');
        buscadorDiv.appendChild(div);

        setTimeout(()=>{
            this.eliminarmensaje();

        },3000)
    }

    //desaparecer el menaje de error o success
    eliminarmensaje(){

        const alert=document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
        
    }


}