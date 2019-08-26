
//funcion que no existe

try{
    algo();
}
catch(error){
    console.log(error);
}finally{
    console.log('haya error o no se va ejecutar siempre');
}

function obtenerCliente(){
    console.log('descargando');

    setTimeout(function(){
        console.log('completo');
    },3000);    
}
obtenerCliente();