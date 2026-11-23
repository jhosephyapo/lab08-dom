class Pelicula {
  constructor(titulo, director) {
    this.titulo = titulo;
    this.director = director;
  }

  mostrarEnPagina(lista) {
    const li = document.createElement("li");
    const descripcion = document.createElement("span");
    descripcion.textContent = `${this.titulo} — Director: ${this.director} `;

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Modificar";
    btnEditar.type = "button";
    btnEditar.addEventListener("click", () => comenzarEdicion(this, li));

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.type = "button";
    btnBorrar.addEventListener("click", () => li.remove());

    li.appendChild(descripcion);
    li.appendChild(btnEditar);
    li.appendChild(btnBorrar);
    lista.appendChild(li);
  }
}

const formulario = document.getElementById("formulario-pelicula");
const campoTitulo = document.getElementById("titulo-pelicula");
const campoDirector = document.getElementById("director-pelicula");
const botonGuardar = document.getElementById("btn-guardar");
const botonCancelar = document.getElementById("btn-cancelar");
const lista = document.getElementById("lista-peliculas");

let peliculaEnEdicion = null;
let elementoEnEdicion = null;

function comenzarEdicion(pelicula, elemento) {
  peliculaEnEdicion = pelicula;
  elementoEnEdicion = elemento;
  campoTitulo.value = pelicula.titulo;
  campoDirector.value = pelicula.director;
  botonGuardar.textContent = "Guardar cambios";
  botonCancelar.hidden = false;
  campoTitulo.focus();
}

function cancelarEdicion() {
  peliculaEnEdicion = null;
  elementoEnEdicion = null;
  formulario.reset();
  botonGuardar.textContent = "Agregar";
  botonCancelar.hidden = true;
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const titulo = campoTitulo.value.trim();
  const director = campoDirector.value.trim();

  if (peliculaEnEdicion) {
    peliculaEnEdicion.titulo = titulo;
    peliculaEnEdicion.director = director;
    const elementoAnterior = elementoEnEdicion;
    cancelarEdicion();
    elementoAnterior.remove();
    peliculaEnEdicion = new Pelicula(titulo, director);
    peliculaEnEdicion.mostrarEnPagina(lista);
    peliculaEnEdicion = null;
  } else {
    const pelicula = new Pelicula(titulo, director);
    pelicula.mostrarEnPagina(lista);
    formulario.reset();
  }
  campoTitulo.focus();
});

botonCancelar.addEventListener("click", cancelarEdicion);
