
//query selector

//const encabezado=document.querySelector('#encabezado'); //QUERYSELECTOR CON ID
const encabezado=document.querySelector('.encabezado'); //QUERYSELECTOR CON UNA CLASE


//aplicar css
encabezado.style.background='#333';
encabezado.style.color='#fff';
encabezado.style.padding='20px';
encabezado.textContent='Los mejores cursos';
//console.log(encabezado);


//la direFencia entre query selector y get element by id es que 
//en query selector podemos acceder tanto a las clases con .nombreClase y a los id con #nombreId
//mientras que en getElementBYID solo a los id


//query selector regresa el primer elemento de todo el contenido

const elementos=document.querySelector('h1');

//console.log(elementos);


let enlace;

enlace=document.querySelector('#principal a:first-child');
enlace=document.querySelector('#principal a:last-child');
enlace=document.querySelector('#principal a:nth-child(3)');

console.log(enlace);