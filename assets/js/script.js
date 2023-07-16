/*
let btn = document.getElementById("btn-submit");
let contenedor = document.getElementById("listaContent");
function ingresar() {
  var texto = document.getElementById("Description").value;
  var title = document.getElementById("inputText").value;
  if (!texto || !title) return alert("Todos los campos son obligatorios.");
  console.log(texto, title);
  let div = document.createElement("div");
  div.innerHTML += `

<p>${title} - ${texto}</p>
<button onclick="eliminar(this)" class='btn-delete'>Eliminar</button>  
`;

  contenedor.appendChild(div);
}

const eliminar = (e) => {
  const divPadre = e.parentNode;
  contenedor.removeChild(divPadre);
};
*/

let contenedor = document.querySelector(".tabla__tareas");
let id = 1;
let tareas = [];

function agregandoTarea() {
  const tarea_nombre = document.getElementById("nombreTarea").value;
  const tarea_descripcion = document.getElementById("descripcionTarea").value;

  if (!tarea_descripcion || !tarea_nombre)
    return alert("Todos los campos deben de estar!");
  if (tarea_descripcion.length > 15)
    return alert("La descripción es muy larga!");
  if (tarea_nombre.length > 5)
    return alert("El nombre de la tarea es muy largo!");
  if (id > 8) return alert("No puedes añadir más tareas!");

  let parrafo = document.createElement("p");
  parrafo.innerHTML += `${tarea_nombre} - ${tarea_descripcion} - <button class='boton boton__eliminar' onclick='eliminarTarea(this)'>Eliminar</button> <button onclick='editarTarea(this)' class='boton boton__editar'>Editar</button> <hr>`;
  contenedor.append(parrafo);
  id++;
}

/**
 * @param e
 */

function eliminarTarea(e) {
  const parrafoMain = e.parentNode;
  contenedor.removeChild(parrafoMain);
  id--;
}

/**
 * @param e
 */
function editarTarea(e) {
  let obtenerTodo = e.parentNode;
  // let obtenerID = obtenerTodo.id;
  // let obtenerParrafo = document.getElementById(`${obtenerID}`)

  // console.log(obtenerParrafo)
  obtenerTodo.innerHTML += `
    <input type='text' placeholder='Tarea' id='nombreTarea__2'>   <input type='text' placeholder='Descripción' id='descripcionTarea__2'>
    <button onclick='listTodo(this)' class='boton boton__listo'>Listo</button>
    `;
}

/**
 *
 * @param e
 */
function listTodo(e) {
  editandoTodo();
  eliminarTarea(e);
}

function editandoTodo() {
  const tarea_nombre = document.getElementById("nombreTarea__2").value;
  const tarea_descripcion = document.getElementById(
    "descripcionTarea__2"
  ).value;

  if (!tarea_descripcion || !tarea_nombre)
    return alert("Todos los campos deben de estar!");
  if (tarea_descripcion.length > 15)
    return alert("La descripción es muy larga!");
  if (tarea_nombre.length > 5)
    return alert("El nombre de la tarea es muy largo!");
  let parrafo = document.createElement("p");
  parrafo.innerHTML += `${tarea_nombre} - ${tarea_descripcion} - <button class='boton boton__eliminar' onclick='eliminarTarea(this)'>Eliminar</button> <button onclick='editarTarea(this)' class='boton boton__editar'>Editar</button><hr>`;
  contenedor.append(parrafo);
}
