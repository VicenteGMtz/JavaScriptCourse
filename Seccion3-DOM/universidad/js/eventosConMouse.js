//variables


const encabezado=document.querySelector('#encabezado');
const enlace=document.querySelectorAll('.enlace');
const boton=document.querySelector('#vaciar-carrito');
//click
//boton.addEventListener('click',obtenerEvento);

//dobleclick
//boton.addEventListener('dbclick',obtenerEvento);

//mouseenter
//boton.addEventListener('mouseenter',obtenerEvento);

//mouse leave
//boton.addEventListener('mouseleave',obtenerEvento);

//mouse over
//boton.addEventListener('mouseover',obtenerEvento);

//mousedown
//boton.addEventListener('mousedown',obtenerEvento);

//mouse up
//boton.addEventListener('mouseup',obtenerEvento);


encabezado.addEventListener('mousemove',obtenerEvento);

function obtenerEvento(e){
    console.log(`evento: ${e.type}`);
}