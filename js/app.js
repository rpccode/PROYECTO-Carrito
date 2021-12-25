const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#listar-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listarCursos = document.querySelector('#lista-cursos');

cargarEventListener();
function  cargarEventListener(){
        listarCursos.addEventListener('click', agregarCursos);
}
 

//Funciones

function agregarCursos(e){
    e.preventDefault();


        if(e.target.classList.contains('agregar-carrito')){
            console.log('agregando carriito....');
        }


       
}