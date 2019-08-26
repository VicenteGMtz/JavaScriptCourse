
let elemento;

elemento=document;
elemento=document.all;
elemento=document.all[10];
elemento=document.head;
elemento=document.body;
elemento=document.domain;
elemento=document.URL;
elemento=document.characterSet;
elemento=document.head;
elemento=document.forms;
elemento=document.forms[0];
elemento=document.forms[0].id;
elemento=document.forms[0].className;
elemento=document.forms[0].classList;
elemento=document.forms[0].classList[0];

elemento=document.images;
elemento=document.images[0];
elemento=document.images[0].id;
elemento=document.images[0].src;
elemento=document.images[0].getAttribute('src');
elemento=document.images[0].getAttribute('id');


//numero de scripts
elemento=document.scripts;


//ejercicio convertir un html collection a array
elemento=document.images;
let images=document.images;
let imagenesArray=Array.from(images);

//regresadno las imagenes con foreach
imagenesArray.forEach(function(imagen){
    console.log(imagen);

})

console.log(imagenesArray);