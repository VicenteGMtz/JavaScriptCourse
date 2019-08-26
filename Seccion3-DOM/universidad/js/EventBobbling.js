//event bubbling evento de burbujas

const card=document.querySelector('.card');
const infoCurso=document.querySelector('.info-card');
const agregarCarrito=document.querySelector('.agregar-carrito');

card.addEventListener('click',function(e){
    console.log('clic en card');
    e.stopPropagation();
});


infoCurso.addEventListener('click',function(e){
    console.log('clic en info curso');
    e.stopPropagation();
});

agregarCarrito.addEventListener('click',function(e){
    console.log('clic en agregar a carrito');
    e.stopPropagation();
});