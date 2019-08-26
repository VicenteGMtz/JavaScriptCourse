//REMPLAZANDO elementos con javaScript


const nuevoEncabezado=document.createElement('h2');

//agregar un id
nuevoEncabezado.id='encabezado';
//agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('los mejores cursos'));

//elemento anterior sera remplazado
const anterior=document.querySelector('#encabezado');
//elemento padre
const elPadre=document.querySelector('#lista-cursos');

//remplazar
elPadre.replaceChild(nuevoEncabezado,anterior);



console.log(nuevoEncabezado);
