const busqueda=document.querySelector('#buscador');

//busqueda.addEventListener('keydown',obtenerEvento);
//busqueda.addEventListener('keyup',obtenerEvento);
//busqueda.addEventListener('keypress',obtenerEvento);
//busqueda.addEventListener('focus',obtenerEvento);
//busqueda.addEventListener('blur',obtenerEvento);
//busqueda.addEventListener('cut',obtenerEvento);  CTRL+ C
//busqueda.addEventListener('copy',obtenerEvento);
//busqueda.addEventListener('paste',obtenerEvento);

//el evento input incluye todos los anteriores registra 
//todo las acciones que se van realizadnod en el input
busqueda.addEventListener('input',obtenerEvento);


function obtenerEvento(e){
    //console.log(busqueda.value);
    //document.querySelector('#encabezado').innerText=busqueda.value;
    console.log(`evento: ${e.type}`);
}

