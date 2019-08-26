
//FOR LOOPS

for(let i=0;i<=10;i++){

    if(i==5){
       // console.log(`voy en el numero ${i}`);
        continue;//para continuar el recorrido y no volver a imprimir el cinco
    }
    //console.log(`numero: ${i}`);
}



//numeros pares e impares

for(let a=0;a<=30;a++){
    if(a%2==0){
        //console.log(`El numero ${a} es par`);
    }else{
        //console.log(`El numero ${a} es impar`);
    }
}


const productos=['guitarra','bateria','trompeta','piano'];

for(let a=0;a<=productos.length;a++){
    console.log(`El producto ${productos[a]} fue agregado`);

}


