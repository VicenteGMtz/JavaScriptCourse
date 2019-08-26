

//******************* */variables     *************************************************************


const LIstaTweets=document.querySelector('#lista-tweets');

//********************* */event listeners  ********************************************************

eventListeners();
function eventListeners(){
    //agregar tweet 
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //borrar tweet 
    LIstaTweets.addEventListener('click',borrarTweet);

    //cargar contenido
    document.addEventListener('DOMContentLoaded',localStorageListo);
}




//*********************** */funciones     *************************************************************


//añadir tweet
function agregarTweet(e){
    e.preventDefault();
    //leer el valor de text area
    const tweet=document.querySelector('#tweet').value;
    //crear boton borrar
    const botonBorrar=document.createElement('a');//creamos un boton de tipo a
    botonBorrar.classList='borrar-tweet';//agregamos clase al boton borrar
    botonBorrar.innerText='X'


    //crear elemtno y allñadir contenido a la lista
    const li=document.createElement('li');
    li.innerText=tweet;
    //AGREGAR ENLACE  del boton creado  al li
    li.appendChild(botonBorrar);
     //añade el tweet a la lista
    LIstaTweets.appendChild(li);
    console.log(tweet);


    //añadir a local storage mediante la funcion agregarTeewLocalStorage como parametro
    //tweeet que contine el teww guardado
    agregarTweetLocalStorage(tweet);

}

//eliminar el tweet del DOM
function borrarTweet(e){
    e.preventDefault();
    //verificar que el boton eliminar sea el unico seleccionado
    if(e.target.className==='borrar-tweet'){
        e.target.parentElement.remove();
        //console.log( e.target.parentElement.remove());
        //alert('teewt eliminado');

        borrarTweetLocalStorage(e.target.parentElement.innerText);
       // console.log(e.target.parentElement.innerText);
    }

}


//mostrar datos de localstorage en la lista
function localStorageListo(){
    let tweets;

    tweets=obtenerTweetsLocalStorage();
    //console.log(tweets);

    tweets.forEach(function(tweet){
         //crear boton borrar
            const botonBorrar=document.createElement('a');//creamos un boton de tipo a
            botonBorrar.classList='borrar-tweet';//agregamos clase al boton borrar
            botonBorrar.innerText='X'

            //crear elemtno y allñadir contenido a la lista
            const li=document.createElement('li');
            li.innerText=tweet;
            //AGREGAR ENLACE  del boton creado  al li
            li.appendChild(botonBorrar);
            //añade el tweet a la lista
            LIstaTweets.appendChild(li);

    });
}

//AGREGA TWEET AL LOCALSTORAGE psamos de nuevo el parametreo tweet

function agregarTweetLocalStorage(tweet){
    let tweets;
    //añadimos a tweets los valores existetes en localStorag
    tweets=obtenerTweetsLocalStorage();

    //añadir el nuevo tweet
    tweets.push(tweet);

    //convertir de string a arreglo para localStorage
    localStorage.setItem('tweets',JSON.stringify(tweets));

}


//creamos la funcion obtener tweets para poder reautilizarla an las otras funciones
function obtenerTweetsLocalStorage(){
    let tweets;

    //revisar valores de local storeage
    if(localStorage.getItem('tweets')===null){
        //si no existen datos en el localstorgae u¿inicializamos el arregloe n vacio
        tweets=[];
    }else{
        //guardar los tweets en un json 
        tweets=JSON.parse(localStorage.getItem('tweets'));
    }

    //retornamos los tweets
    return tweets;
}


//eliminar tweet de localStorage
function borrarTweetLocalStorage(tweet){
    let teewts,teewtBorrar;
    //elimina la x de los tweets
    tweetBorrar=tweet.substring(0,tweet.length-1);


    tweets=obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet,index){
        if(tweetBorrar===tweet){
            tweets.splice(index,1)
        }

    });
    localStorage.setItem('tweets',JSON.stringify(tweets));

}

