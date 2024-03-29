
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);
// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
     e.preventDefault();

     // Leer las variables
     const origen = document.getElementById('origen');
     const origenSeleccionado = origen.options[origen.selectedIndex].value;
     const genero = document.getElementById('genero');
     const generoSeleccionado = genero.options[genero.selectedIndex].value;
     const cantidad = document.getElementById('numero').value;

    
     let url = '';
     url += 'http://uinames.com/api/?';
     // Si hay origen agregarlo a la URL
     if(origenSeleccionado !== '') {
          url += `region=${origenSeleccionado}&`;
     }
     // Si hay un genero agregarlo a la URL
     if(generoSeleccionado !== '') {
          url += `gender=${generoSeleccionado}&`;
     }
     // Si hay una cantidad agregarlo a la URL
     if(cantidad !== '') {
          url += `amount=${cantidad}&`;
     }

     // Código de FETCH API AQUI

     /**impelementacion de arrow functions => */
     fetch(url)
     .then(nombres=>nombres.json())
     .then(datos=>{
          let html=`<h2>Lista de nombres</h2>`;
          html +=`<ul class="lista">`;
          datos.forEach(nombres=>{
               html +=`
                  <li>${nombres.name}</li>
               `;   
          });
          html +=`</ul>`;
          document.querySelector("#resultado").innerHTML=html;
     })
     .catch(error=>console.log(error));
}