// scope visibilidad de un avariable en javascript

var a='a';
let b='b';
const c='c';


//SCOPE DE LA FUCNION

function functionScope(){
    var a='A';
    let b='B';
    const c='C';
    console.log('FUNCION:'+a,b,c);
}
functionScope();

if(true){
    var a='AA';
    let b='BB';
    const c='CC';
    console.log('BLOQUE:'+a,b,c);
}

console.log('GLOBALES:'+a,b,c);