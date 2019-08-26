const navegacion=document.querySelector('#principal');

//console.log(navegacion.childNodes);//cuenata los espacions en blanco si son 5 lista cuenta 10

console.log(navegacion.children);//regresa la lista de los hijos pertenecientes al query selector #principal
console.log(navegacion.children[0].nodeName);//los nodeName son las etiquetas de html a li ul nav etc...

/* tipo de nodos regresa un valor en decimal
1 elementos de HTML
2-atributos
3-text node
8-comentarios
9-documentos
10-dcotype
*/
console.log(navegacion.children[0].nodeType);