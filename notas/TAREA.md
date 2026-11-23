# Tarea: Mi componente interactivo 
## Componente elegido 
Lista de peliculas por ver.
## Codigo principal 
```js 
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
``` 
## Pruebas realizadas 
| Accion | Resultado esperado | Cumple (Si/No) | 
|--------|--------------------|----------------| 
| Agregar una película con título y director|Aparece en la lista con su título y director | si| 
|Pulsar Modificar y guardar cambios |La película muestra los datos actualizados |si | 
|Pulsar Borrar |La película desaparece de la lista | si| 

## Por que disene asi mi clase 
- Elegí la clase Pelicula para representar cada película como un objeto.
- El atributo titulo guarda el nombre de la película.
- El atributo director guarda quién la dirigió.
- El método mostrarEnPagina() crea y muestra sus elementos en la lista.
- También agrega botones para modificar o borrar la película.
