
document.getElementById("txtBtn").addEventListener("click",cargarTxt);
document.getElementById("jsonBtn").addEventListener("click",cargarJson);
document.getElementById("apiBTN").addEventListener("click",cargarAPI);


//cargar txt con fetch api
function cargarTxt(){
    fetch('datos.txt')
        //conexion con fetch api para regresar el archivo en formato que queramos json,texto .......
        .then(function(res){
            return res.text();
        })
        //nota simpre que hay un promise s e tene ue hacerle un then
        .then(function(datos){
            document.getElementById("resultado").innerHTML=datos;
            
            console.log(datos);
        })
        .catch(function(error){
            console.log(error);
        });
}


//cargar  json local con fetchapi

function cargarJson(){
    fetch('empleados.json')

    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let html='';
        data.forEach(function(empleaodos) {

            html +=`
                    <li>${empleaodos.nombre}, ${empleaodos.puesto}</li>
            
            `; 
        });

        document.getElementById("resultado").innerHTML=html;
        
    })
    .catch(function(error){
        console.log(error);
    });
}


//consumiendo rest api  CON FETCH API

function cargarAPI(){

    fetch('https://picsum.photos/list')
    .then(function(imagenes){
       
        console.log(imagenes);
        return imagenes.json(); 
    })

    .then (function(imagenes){

        let html='';

        imagenes.forEach(function(img){

            html +=`

                <li>
                    <a target="_blank" href="${img.post_url}"> ir a la imagen</a>
                    ${img.author}
                </li>
            `;
        });

        document.getElementById("resultado").innerHTML=html;
    })

    .catch(function(error){
        console.log(error);
    });
}