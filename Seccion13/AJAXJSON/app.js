const btn1=document.getElementById('boton1');
const btn2=document.getElementById('boton2');

btn1.addEventListener('click',function(){

    //1 creamos xmlhttpreuest
    const xhr=new XMLHttpRequest();

    //2 abrimos la conexion con el arcivo json
    xhr.open('GET','empleado.json',true);

    //3 al momento de la carga veficiacmos el status correcto 200
    xhr.onload=function(){
        if(this.status===200){

            //imprimimos el archivo json
            //console.log(this.responseText);

            //convertimos el json a objeto
            //console.log(JSON.parse(this.responseText));

            const persona=JSON.parse(this.responseText);
           console.log(persona);
           const htmlTemplate=`
                <ul>
                    <li>id: ${persona.id}</li>
                    <li>nombre: ${persona.nombre}</li>
                    <li>empresa: ${persona.empresa}</li>
                    <li>Actividad:${persona.trabajo}</li>       
                </ul>
           `;
           document.getElementById('empleado').innerHTML=htmlTemplate;      
        }
    }
    //enviamos la conexion 
    xhr.send();
});



btn2.addEventListener('click',function(){

    //1 creamos xmlhttpreuest
    const xhr=new XMLHttpRequest();

    //2 abrimos la conexion con el arcivo json
    xhr.open('GET','empleados.json',true);

    //3 al momento de la carga veficiacmos el status correcto 200
    xhr.onload=function(){
        if(this.status===200){

            //imprimimos el archivo json
            //console.log(this.responseText);

            //convertimos el json a objeto
            //console.log(JSON.parse(this.responseText));

            const personal=JSON.parse(this.responseText);

            let htmlTemplate='';
            personal.forEach(function(persona){

                htmlTemplate+=`
                    <ul>
                        <li>id: ${persona.id}</li>
                        <li>nombre: ${persona.nombre}</li>
                        <li>empresa: ${persona.empresa}</li>
                        <li>Actividad:${persona.trabajo}</li>       
                    </ul>
               `;

                
            });
           
           document.getElementById('empleados').innerHTML=htmlTemplate;      
        }
    }
    //enviamos la conexion 
    xhr.send();
});