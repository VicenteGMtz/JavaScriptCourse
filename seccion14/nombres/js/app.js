
//consumo de una api rest


document.querySelector('#generar-nombre').addEventListener('submit',cargarNombres);

function cargarNombres(e){

    e.preventDefault();

    //leer variables

    const origen=document.getElementById('origen');
    const origenSeleccionado=origen.options[origen.selectedIndex].value;

    const genero=document.getElementById('genero');
    const generoSeleccionado=genero.options[genero.selectedIndex].value;

    const cantidad=document.getElementById('numero').value;   
    
    
    let url='';

    url +='https://uinames.com/api/?';

    if(origenSeleccionado!==''){
        url +=`region=${origenSeleccionado}&`;
    }
    if(generoSeleccionado!==''){
        url +=`gender=${generoSeleccionado}&`;
    }
    if(cantidad!==''){
        url +=`amount=${cantidad}&`;
    }

    //uso de ajax

    //objeto ajax
    const xhr=new XMLHttpRequest();

    //abrir coneccion
    xhr.open('GET',url,true);

    //onload
    xhr.onload=function(){
        if(this.status===200){
            //console.log(this.responseText);
            const nombres=JSON.parse(this.responseText);

            let nombresHtml=`<h3>Lista de nombres</h3>`;
            
            //abrimos un ul
            nombresHtml+= '<ul class="lista">';
            
                    nombres.forEach(function(nombre) {
                        nombresHtml+=`
                            <li>${nombre.name}</li>
                        
                        `;
                        
                    });
            nombresHtml+= '</ul>';
            
            //console.log(nombresHtml);

            document.getElementById('resultado').innerHTML=nombresHtml;
            
        }
    }
    //enviar 
    xhr.send();
    


    console.log(url);
    
    
}