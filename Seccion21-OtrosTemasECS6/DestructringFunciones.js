//distructturing o extraer datos de una funcion


// ++++++   metodo anterior a acceder a los datos a una funcion      ++++++++++++++++++++++

function reservacion (completo,opciones){

    opciones = opciones || {};

    let metodo = opciones.metodoPago,
        cantidad =opciones.cantidad,
        dias=opciones.dias;

        console.log(metodo);
        console.log(cantidad);
        console.log(dias);



}

reservacion (
    true,
    {
        metodoPago:'efectivo',
        cantidad: 20000,
        dias: 3
    }
);





// metodo actual  para acceder a los datos a una funcion con destructuring

function reservacionHotel (completo,
        {   metodoPagoHotel='efectivo',
            cantidadHotel=0,
            diasHotel=0
        }={}
    )
    {
        if(completo){
            console.log('Procesar reservación');

        }else{
            console.log('Abandonar reservación');

        }

}

reservacionHotel (
    true,
    {
        metodoPagoHotel:'efectivo',
        cantidadHotel: 20000,
        diasHotel: 3
    }
);