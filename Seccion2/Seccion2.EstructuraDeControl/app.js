
/////////////////////////7    if     ///////////////////////////////////////////////////
const edad=17;

if(edad<=17){
    //console.log('no esta permitido el sexo a menores de edad');
}else{
    //console.log('pasale amigo eres vienvenido a las orgias');
}


//************ */comprobar que una variable tiene un valor
let puntaje;

if(typeof puntaje !='undefined'){
    //console.log(`el puntahe fue de: ${$puntaje}`);
}else{
    //console.log('No hay puntaje');
}


//*****************

let efectivo =500;
let totalCompra=700;

if(efectivo>totalCompra){
    //console.log('procesando su transaccion');
}else{
    //console.log('fondos insuficientes');
}



////////////////////////////     else if    ///////////////////////////////////////////////////////  


let horaHoy=2;
if(horaHoy<=10){
    console.log('buenos dia');
}else if(horaHoy<=18){
    console.log('buanas tardes');
}else{
    console.log('buenas noches');
}


let miCartera=300,
    miTanda=500,
    miAhorro=miCartera+miTanda,
    misDuedas=200;
if(misDuedas<miCartera||misDuedas<miTanda||misDuedas<miAhorro){
    console.log('has podido cubir tus deudas');
}else{
    console.log('tienes que vender tu cuerpo');
}




/////////////// ternario o ternary ///////////////7


const loguado=true;

console.log(loguado===true?'si se ha logueado': 'no se ha logueado');