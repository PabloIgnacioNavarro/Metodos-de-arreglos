const todos = [
  {
    id: 1,
    titulo: "Hacer mercado",
    estado: false,
  },
  {
    id: 2,
    titulo: "Estudiar para la prueba",
    estado: true,
  },
  {
    id: 3,
    titulo: "Sacar a pasear a Tobby",
    estado: false,
  },
];
const contenedorDeCards = document.querySelector(".body");
function mostrarTodos() {
  todos.forEach((tarea) => {
    const nuevoDiv = document.createElement(".div");
    nuevoDiv.classList.add("card");
    nuevoDiv.innerHTML = `
        <h3>${tarea.id}</h3>
        <h3>${tarea.titulo}</h3>
        `;
    contenedorDeCards.appendChild(nuevoDiv);
  });
}
mostrarTodos();
const tareas = [
  {
    id: 1,
    nombre: "tarea1",
  },
  {
    id: 2,
    nombre: "tarea2",
  },
  {
    id: 3,
    nombre: "tarea3",
  },
];
indices = [0, 1, 2];
console.log(tareas[0]);
console.log(tareas.length);
const ultimaTarea3 = tareas[tareas.tareas.length - 1];
tareas.push({
  id: ultimaTarea3.id + 1,
  nombre: "tarea4",
});
const indiceDeTarea2 = tareas.findIndex((tareas) => tareas.id === 2);
tareas.splice(indiceDeTarea2, 1);
console.log(tareas);
