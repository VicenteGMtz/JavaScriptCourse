
document.getElementById("txtBtn").addEventListener("click",cargarTxt);
document.getElementById("jsonBtn").addEventListener("click",cargarJson);
document.getElementById("apiBTN").addEventListener("click",cargarAPI);


//cargar txt con fetch api
function cargarTxt(){
    fetch('datos.txt')
        //conexion con fetch usando arrow function .......
        .then(res=>res.text())
        .then(datos=>document.getElementById("resultado").innerHTML=datos)
        .catch(error => console.log(error) );
}


//cargar  json local con fetchapi

function cargarJson(){
    fetch('empleados.json')

    .then(res=> res.json())
    .then(data=>{
        let html='';
        data.forEach(function(empleaodos) {

            html +=`
                    <li>${empleaodos.nombre}, ${empleaodos.puesto}</li>
            
            `; 
        });

        document.getElementById("resultado").innerHTML=html;
        
    })
    .catch(error=>console.log(error));
}


//consumiendo rest api  CON FETCH API

function cargarAPI(){

    fetch('https://picsum.photos/list')
    .then(imagenes=> imagenes.json())

    .then (imagenes=>{

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

    .catch(error=>console.log(error));
}