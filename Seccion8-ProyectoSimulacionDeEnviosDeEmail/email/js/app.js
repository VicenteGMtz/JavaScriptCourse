//variables 
const email=document.getElementById('email');
const asunto=document.getElementById('asunto');
const mensaje=document.getElementById('mensaje');
const btnEnviar=document.getElementById('enviar');
const formEnviar=document.getElementById('enviar-mail');
const resetBtn=document.getElementById('resetBtn');



//event listener

eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded',inicioApp);

     //campos del formulario

    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);


    //boton de enviar en sumbmit
    btnEnviar.addEventListener('click',enviarEmail);

    //resetear formulario
    resetBtn.addEventListener('click',resetFormulario);
}

//funciones

function inicioApp(){
    btnEnviar.setAttribute("disabled","disabled");
}

//valida eque el campo tenga un texto

function validarCampo(){

    //se valida la longitud del texto 
    validaLongitud(this);

    //validad unicamente email
    //console.log(this.type);
    if(this.type==='email'){
        validarEmail(this);
    }

    let errores=document.querySelectorAll('error');

    if(email.value!==''&&asunto.value!==''&&mensaje.value!==''){
        if(errores.length==0){
            btnEnviar.removeAttribute("disabled");
        }
    }
    
}

//envio de correo
function enviarEmail(e){
    const spinerGift=document.querySelector('#spinner');
    spinerGift.style.display='block';
    
    //fit que envia email
    const enviado=document.createElement('img');
    enviado.src='img/mail.gif';
    enviado.style.display='block';

    //ocultar spiner y mostrar despues de tres egundos
    setTimeout(function(){
        spinerGift.style.display='none';

        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            formEnviar.reset();
            inicioApp(); /// desabilitar boton enviar

        },4000);

    },3000);

    
    e.preventDefault();

}

//verifica la longitud del texto en el campo

function validaLongitud(campo){
    //console.log(campo.value.length);
    if(campo.value.length>0){
        campo.style.borderBottomColor='green';
        campo.classList.remove('error');

    }else{
        campo.style.borderBottomColor='red';
        campo.classList.add('error');

    }

}

//validar email

function validarEmail(campo){

    const mensaje=campo.value;

    if(mensaje.indexOf('@')!==-1){
        campo.style.borderBottomColor='green';
        campo.classList.remove('error');

    }else{
        campo.style.borderBottomColor='red';
        campo.classList.add('error');

    }

}

function resetFormulario(e){
    formEnviar.reset();
    inicioApp();//deesabilitar boton enviar
    e.preventDefault();
    
}