

document.getElementById('cargar').addEventListener('click',cargarDatos);

function cargarDatos(){
    //crear el objeto xmlhttprequest
    const xhr=new XMLHttpRequest();

    //abrir una conexion
    xhr.open('GET','datos.txt',true);

    //una vez que carga

     /** forma nueva de obtner los datos desde un archivo txt
      *     xhr.onload=function(){
        //200 correcto   400:error
        if(this.status===200){
            const div=document.querySelector('#listado');
            div.innerHTML=`
            <h2>${this.responseText}</h2>
            `;
            console.log(this.responseText);
        }
    }
      */

      /** forma mas antigua  */

    
      xhr.onreadystatechange=(function(){
        console.log(this.readyState);
          if(this.readyState===4){
              //console.log(this.responseText);
                     
            
        }

      })

      /**
       * 0 no inicializado
       * 1 coneion establecida
       * 2 recibido
       * 3 procesado
       * 4 respuesta  lista 
       */



    xhr.send();

}