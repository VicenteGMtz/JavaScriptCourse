
const metodoPago='prestamo';

switch(metodoPago){
    case 'efectivo':
        console.log(`El usuario ha pagado con el metodo de pago ${metodoPago}`);
         break;

    case 'tarjeta':
        console.log(`El usuario ha pagado con el metodo de pago ${metodoPago}`);
        break;

    case 'cheque':
        console.log(`El usuario ha pagado con el metodo de pago ${metodoPago}`);
        break;

    case 'credito':
        console.log(`El usuario ha pagado con el metodo de pago ${metodoPago}`);
        break;

    default:
        console.log('metodo de pago no soportado');
        break;
}

const fecha=new Date();

switch(fecha.getMonth()){
    case 0:
        console.log('enero');
        break;
    case 1:
        console.log('febrero');  
        break;
    case 2:
        console.log('marzo');
        break;
    case 3:
        console.log('abril');
        break;
    case 4:
        console.log('mayo');
        break;
    case 5:
        console.log('junio');
        break;
    case 6:
        console.log('julio');
        break;
    case 7:
        console.log('agosto');
        break;
    case 8:
        console.log('septiembre');
        break;

    case 9:
        console.log('octubre');
        break;
    case 10:
        console.log('noviembre');
        break;
    case 11:
        console.log('diciembre');
        break;
}