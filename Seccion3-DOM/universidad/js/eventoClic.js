//ADD EVENT LISTENR



document.querySelector('#submit-buscador').addEventListener('click',ejectandoEvento);
function ejectandoEvento(e){
    e.preventDefault();
    console.log('este es un console');

    let elemento;

    elemento=e;
    elemento=e.target;
    elemento=e.target.id;
    elemento=e.target.className;
    elemento=e.target.innerText;

    console.log(elemento);
}



//cambiar un titulo con un evento

document.querySelector('#encabezado').addEventListener('click',agregarTitulo);

function agregarTitulo(e){
    e.target.innerText='hola es un nuevo titulo con eventos';

}