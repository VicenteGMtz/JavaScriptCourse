
class API{


    async obtenerDatos(){

        //total de establecimientos a mostrar
        const total=1000;
        //obtener datos desde  ¡kl apai
        const datos= await fetch (`https://api.datos.gob.mx/v2/precio.gasolina.publico?pageSize=${total}`);

        //retornar doatos en json
        const respuestJSON=await datos.json();

        return{
            respuestJSON
        }
    }
}