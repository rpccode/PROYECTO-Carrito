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
            const cursoSeleccionado =e.target.parentElement.parentElement;
            

            leerLosDatosDelCurso(cursoSeleccionado);
        }


       
}

function leerLosDatosDelCurso(curso){
        // console.log(curso);


        const infoCurso = {
            imagen:curso.querySelector('.imagen-curso').src,
            titulo:curso.querySelector('h4').textContent,
            precio:curso.querySelector('.precio span').textContent,
            id:curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1,

        }
        console.log(infoCurso);
}