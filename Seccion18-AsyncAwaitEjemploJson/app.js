
//cada que se use el async en funciones nos retorna un promise
async function leerTodos(){


    //esperar la respuesta
    const respuesta =await fetch ('https://jsonplaceholder.typicode.com/todos');

    //procede cuando la respuesta esta hechha
    const datos=await respuesta.json();
    return datos;

}

//aqui nos regresa el promise
//console.log(leerTodos());

leerTodos()
.then(usuarios=>console.log(usuarios));