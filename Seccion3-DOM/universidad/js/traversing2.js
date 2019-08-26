
//travering escalar a los elmentos padres


//el traversing nos mpermite recorrer todos los ndoso del dom y poder a cualquier elemento ocupando el parent
//o el child includo el sibling
const enlaces=document.querySelectorAll('.enlace');
//console.log(enlaces[0].parentElement);
//console.log(enlaces[0].parentElement.parentElement);
//console.log(enlaces[0].parentElement.parentElement.parentElement);


const cursos=document.querySelectorAll('.card');
console.log(cursos[0]);
console.log(cursos[0].parentElement);
console.log(cursos[0].parentElement.parentElement);
console.log(cursos[0].parentElement.parentElement.parentElement);
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent=
    'hola desde traversing');


//sibling
console.log(enlaces[0].nextElementSibling);
console.log(enlaces[0].nextElementSibling.nextElementSibling);
console.log(enlaces[0].nextElementSibling.nextElementSibling.nextElementSibling);
