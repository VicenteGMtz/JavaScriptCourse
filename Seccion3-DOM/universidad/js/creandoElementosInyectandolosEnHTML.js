//creando elementos con javaScript


const enlace=document.createElement('a');
//agregamos una clase
enlace.className='enlace';
//agregamos un id
enlace.id='nuevo-id';
//agregammos un href
enlace.setAttribute('href','#');
//añadir texto
enlace.textContent='nevo elemento';
//agregarlo al html
document.querySelector('#secundaria').appendChild(enlace);
console.log(enlace);