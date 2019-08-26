//callback en foreach

const ciudades=['mexico','paris','buenos aires','munich'];


//in line callback por qqu e la funcion no tine nombre
/*
ciudades.forEach(function(ciudad){

    console.log(ciudad);
})*/






//funcion definida con nombre

function callback(ciudad){
    console.log(ciudad);

}

ciudades.forEach(callback);