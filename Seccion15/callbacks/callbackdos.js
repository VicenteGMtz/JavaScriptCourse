//listadp de painse

const paises=['mexico','alemania','eua','rusia','arabia saudita','españa','suiza','colombia','cuba'];




//se agrega un nuevo pais despues de dos segundos

function nuevoPais(pais,callback){
    setTimeout(function(){
        paises.push(pais);
        callback();

    },2000);
}




//los paises se muestran despues de un segundo
function mostrarPaises(){
    setTimeout(function(){
        let html='';

        paises.forEach(function(pais){
            html+=`
                <li>${pais}</li>
            
            `;
        });

        document.getElementById('app').innerHTML=html; 

    },1000);

}


//agregar nuevo pais

nuevoPais('pais de las maravillas',mostrarPaises);

mostrarPaises();
