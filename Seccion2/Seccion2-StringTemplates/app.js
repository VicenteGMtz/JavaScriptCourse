const producto1='pizza',
      precio1=30,
      producto2='Hamburgesa',
      precio2=90;


let html;

/** forma antigua

html='<ul>'+
     '<li>orden:'+producto1+'</li>'+
     '<li>Precio:'+precio1+'</li>'+
     '<li>Orden:'+producto2+'</li>'+
     '<li>Precio:'+precio2+'</li>'+
     '<li>total:'+(precio1+precio2)+'</li>'+
     '</ul>';   

     document.getElementById('app').innerHTML=html;

 */

 /**forma actualizada */

 html=`
     <ul>
        <li>Orden:${producto1}</li>
        <li>Precio:${precio1}</li>
        <li>Orden:${producto2}</li>
        <li>Precio:${precio2}</li>
        <li>Total:${total(precio1,precio2)}</li>
     </ul>
 `;
 //creamos la funcion total para mostrar el total por la compra de los productos

 function total(precio1,precio2){
     return precio1+precio2;
 }

 document.getElementById('app').innerHTML=html;