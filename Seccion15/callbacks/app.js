//promises 


//ejemplo de resolve usando promises
const esperando=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('se eejecutò');
    },3000);
});


//para llamar a un resolve se ocupa .then y el mensaje como parametro del promise 
esperando.then(function(mensaje){
    console.log(mensaje);
    
})





//ejemplo de reject uso de promises
const aplicarDescuento=new Promise(function(resolve,reject){
    const descuento=false;
    if(descuento){
        resolve('descuento aplicado');
        
    }else{
        reject('no existen descuentos para este producto');
        
    }
})

//llamamos al promise
aplicarDescuento.then(function(mensaje){
    console.log(mensaje);
    
}).catch(function(error){

    console.log(error);
    

});