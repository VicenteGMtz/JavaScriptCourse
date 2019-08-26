
class API {


    constructor (apikey){
        this.apikey = apikey;
    }

    async obtenerTodasLasMonedas(){
        const url= `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        // fetch
       const  constUrlObtenerMonedas = await fetch (url) ;

        //respuesta en json

        const monedas= await constUrlObtenerMonedas.json();

        //console.log(monedas);

        return {
            monedas
        }
    }



    async obtenerValores(moneda,criptomoneda){
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

        //consultar en rest api
        const urlConvertir=await fetch(url);

        const resultado=  await urlConvertir.json();

        return {
            resultado
        }
    }
}