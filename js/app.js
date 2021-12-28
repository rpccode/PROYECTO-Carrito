const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listarCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

cargarEventListener();

function  cargarEventListener(){
        listarCursos.addEventListener('click', agregarCursos);

        carrito.addEventListener('click', eliminarCursos);

        vaciarCarrito.addEventListener('click', () =>{

            articulosCarrito = [];


            limpiarHTML();

        });
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
        const existe =articulosCarrito.some( curso => curso.id === infoCurso.id);

            if (existe) {
                
                const curso = articulosCarrito.map(curso => {
                            if(curso.id === infoCurso.id)
                            {
                                curso.cantidad += 1;
                                return curso;
                            }else{
                                return curso;
                            }

                })
                articulosCarrito =[...curso];
            }else{

                articulosCarrito = [...articulosCarrito,infoCurso];

            }

        
        
                    

                    console.log(articulosCarrito);

                    carritoHTML();
}

function carritoHTML(){

        limpiarHTML();

    articulosCarrito.forEach( curso =>{

            const {imagen,titulo,precio,cantidad,id} = curso

        const row  = document.createElement('tr');



        row.innerHTML =`
                <td>  <img src="${imagen}" width="100"></td>
                <td>${titulo}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>

                <td>
                                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
                </td>
        
        
        `;

        contenedorCarrito.appendChild(row);

    });
}

function limpiarHTML() {

    // contenedorCarrito.innerHTML = ' ';

while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
}

}

function eliminarCursos(e){
       

        if (e.target.classList.contains('borrar-curso')) {
             const cursoid=e.target.getAttribute('data-id');

             articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoid);

             console.log(articulosCarrito);

             carritoHTML();
        }
}