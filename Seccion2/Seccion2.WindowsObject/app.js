//window.alert('hola');
//window.console.log('es un consolador');

//obtener la altura y ancho del navegador

let altura,ancho;
/*
altura=window.outerHeight;
ancho=window.outerWidth;*/
altura=window.innerHeight;
ancho=window.innerWidth;

//console.log(altura);
//console.log(ancho);

let ubicacion;
//ubicacion=window.location;
//ubicacion=window.location.hostname;
//ubicacion=window.location.search;

ubicacion=window.navigator;
ubicacion=window.navigator.appName;
ubicacion=window.navigator.appVersion;
ubicacion=window.navigator.userAgent;

ubicacion=window.navigator.language;
console.log(ubicacion);