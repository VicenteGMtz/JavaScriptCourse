//get element by id

let elemento;


elemento=document.getElementById('hero');
elemento=document.getElementById('header').className;

let encabezado;
encabezado=document.getElementById('encabezado').className;
encabezado=document.getElementById('encabezado').id;
encabezado=document.getElementById('encabezado');
//ingresar al texto del contenido 
encabezado=document.getElementById('encabezado').textContent;
encabezado=document.getElementById('encabezado').innerText;


//agregar stilos al encabezado
encabezado=document.getElementById('encabezado');
encabezado.style.background='#333';
encabezado.style.color='#fff';
encabezado.style.padding='20px';

//cambiar texto
encabezado.textContent='Los mejores cursos';
encabezado.innerText='Los mejores cursos';

console.log(encabezado);