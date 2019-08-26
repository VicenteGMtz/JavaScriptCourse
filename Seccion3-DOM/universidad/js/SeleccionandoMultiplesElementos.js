//get element by classs name


let enlaces=document.getElementsByClassName('enlace')[3];
//let enlaces=enlaces[3];

enlaces.style.background='red';
//console.log(enlaces);







//mezclar query selector con getelementbyclassnmame
const listaEnlaces=document.querySelector('#principal').getElementsByClassName('enalce');

//console.log(listaEnlaces);


const links=document.getElementsByTagName('a');
links[18].style.color='black';
links[18].style.textAlign='center';
//console.log(links);



//pasar de htmlColection a un arreglo
const links2=document.getElementsByTagName('a');
let listaLinks=Array.from(links2);
//recrrer el arreglo con un foreach
listaLinks.forEach(function(enalce){
    console.log(enalce);
})

//console.log(links2);
