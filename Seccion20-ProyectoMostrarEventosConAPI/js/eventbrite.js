
class EventBrite{

    contructor(){
        this.token_auth = 'DMSUGYZ7XXSQOX6PFASD';
        this.odenar = 'date';
    }

    ///mostrar resultados de la busqueda
    async obtenerEventos(evento,categoria){
        const respuestaEvento= await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=date&categories=${categoria}&token=DMSUGYZ7XXSQOX6PFASD`)
        
        //esperar la respuesta y devolverlo como json
        const eventos=await respuestaEvento.json();

        return{
            eventos
        }
    }
    //obtiene la categoria en init
    async obtenerCategorias(){
        //consultar las categorias a l aapi de evntbrite
        
        //console.log(this.token_auth);
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=DMSUGYZ7XXSQOX6PFASD`);

        

        //esperar la respuesta de las categorias y devolver un json
        const categorias = await respuestaCategorias.json();

        //devolvemos el resultado

        return {
            categorias
        }


    }



}