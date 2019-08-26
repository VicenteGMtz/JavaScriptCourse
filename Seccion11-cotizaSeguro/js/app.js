//cotizador constructor

class Seguro{
    constructor(marca,anio,tipo){
        this.marca=marca;
        this.anio=anio;
        this.tipo=tipo;


    }

    cotizarSeguro(){

        /**
         * americano 1.15
         * asiatico 1.05
         * europeo 1.35
         */
        let cantidad;
        let base=2000;
        switch(this.marca){
            case '1':
                cantidad=base*1.15;
                break;
            case '2':
                cantidad=base*1.05;
                break;
            case '3':
                cantidad=base*1.35;
                break;
    
        }
    
        //encontrar la diferencia de años y selecciona el ususario unaaño menos al actual
        const diferencia=new Date().getFullYear()-this.anio;
        //reducir el 3% del costo del seguro por cada año de diferencia del actual
        cantidad -=((diferencia*3)*cantidad)/100;
    
        /**
         * tipo de  seguro
         * 
         * seguro basico aumentar 30%;
         * seguro ompleto 50%
         */
    
         if(this.tipo==='basico'){
             cantidad*=1.30;
         }else{
             cantidad*=1.50;
         }
    
         return cantidad;
    }

    
  
}



//todo lo que se muestra

class Interfaz{
    mostrarMensaje (mensaje,tipoError){
        const div=document.createElement('div');
    
        if(tipoError==='error'){
            div.classList.add('mensaje','error');
        }else{
            div.classList.add('mensaje','correcto');
        }
        div.innerHTML=`${mensaje}`;
        formulario.insertBefore(div,document.querySelector('.form-group'));
    
    
        setTimeout(function(){
            document.querySelector('.mensaje').remove();
        },3000);
    
    
    }

    mostrarResultado(seguro,total){
        const resultado=document.getElementById('resultado');
        let marca;
    
        switch(seguro.marca){
            case '1':
                marca='Americano';
                break;
            case '2':
                marca='Asiatico';
                break;
            case '3':
                marca='Europeo';
                break;
            
        }
    
        //console.log(marca);
    
        //crear un div
    
        const div=document.createElement('div');
    
        div.innerHTML=`
            <p class='header'>Tu resumen:</p>
            <p>Marca:${marca}</p>
            <p>Año:${seguro.anio}</p>
            <p>Tipo:${seguro.tipo}</p>
            <p>Total:${total}</p> 
        `;
    
        //mostrar spinner
        const spiner=document.querySelector('#cargando img');
        spiner.style.display='block';
    
        setTimeout(function(){
            spiner.style.display='none';
    
            resultado.appendChild(div);
    
        },3000);
       
    
    }


}






//eventlisteners

const formulario=document.getElementById('cotizar-seguro');

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    //leer la marca seleccionada de los valores que posee el value en html
    const marca=document.getElementById('marca');
    const marcaSeleccionada=marca.options[marca.selectedIndex].value;

    //leer el año seleccionado

    const anio=document.getElementById('anio');
    const anioSeleccionado=anio.options[anio.selectedIndex].value;

   //leer el valor de un radio buton
    const tipo=document.querySelector('input[name="tipo"]:checked').value;

    //crear una instancia de interfaz
    const interfaz=new Interfaz();

    //validad que los campos no esten vacios
    if(marcaSeleccionada===''||anioSeleccionado===''||tipo===''){
        interfaz.mostrarMensaje('Faltan complettar algunos cacmpos','error');
    }else{

        // limpiar resultaod anteriores
        const resultados=document.querySelector('#resultado div')
        if(resultados!=null){
            resultados.remove();
        }
         //intanciar seguro
        const seguro=new Seguro(marcaSeleccionada,anioSeleccionado,tipo);
       // console.log(seguro);

       //cotizar el seguro
       const cantidad=seguro.cotizarSeguro(seguro);

       //mostrar resultado
       interfaz.mostrarResultado(seguro,cantidad);
       interfaz.mostrarMensaje('Cargando...','correcto');

    }

});


const max=new Date().getFullYear(),
      min=max-20;

/**console.log(max);
console.log(min); */
const SelectAnios=document.getElementById('anio');
for(let i=max;i>min;i--){
    let option=document.createElement('option');
    //console.log(option);
    option.value=i;
    option.innerHTML=i;
    SelectAnios.appendChild(option);
}
