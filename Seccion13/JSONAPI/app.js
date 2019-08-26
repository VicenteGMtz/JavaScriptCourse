

const api=document.getElementById('cargar').addEventListener('click',cargarAPI);

function cargarAPI(){

    
    
    //crear objeto 
    const xhr=new XMLHttpRequest();

    //abrir conexion
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

    //CARGAR
    xhr.onload=function(){
        if(this.status===200){
            //console.log(this.responseText);
        const cargar=JSON.parse(this.responseText);

        console.log(cargar);
        


        let contenido='';
        cargar.forEach(function(post) {

            contenido +=`

                <h3>${post.title}</h3>

                <p>${post.body}</p>
            
            `;
            
        });

        document.getElementById('listado').innerHTML=contenido;
            
        }
    }

    xhr.send();
}