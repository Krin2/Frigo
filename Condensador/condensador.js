// Modelo Condensador

// Almacena y modifica datos

// Constantes a usar en los estados
const estadoBatea = {
  muyBajo : "Muy bajo",
  bajo: "Bajo",
  normal: "Normal",
  alto: "Alto",
  muyAlto: "Muy alto"
};
const estadoCondensador= {
    apagado: "Apagado",
    enMarcha: "En marcha",
    enMarchaConFalla: "En marcha con falla",
    enFalla: "En falla"
};
const estadoServicio = {
  off: "Off",
  manual: "Manual",
  automatico: "Automatico",
  remoto: "Remoto"
};

class Condensador {
  constructor(tag,cantidadDeBombas,cantidadDeForzadores,servicio,estadoCondensador,nivelDeBatea) {
    var id=0;
    var tag= "";
    var cantidadDeBomba = 0;
    var cantidadDeForzadores=0 ;
    var servicio= estadoServicio.Off;
    var estadoCondensador= estadoCondensador.apagado;
    var nivelDeBatea= estadoBatea.normal;
    this.tag=tag;
    this.cantidadDeBombas=cantidadDeBombas;
    this.cantidadDeForzadores=cantidadDeForzadores
    this.servicio=servicio;
    this.estadoCondensador=estadoCondensador;
    this.nivelDeBatea=nivelDeBatea;
  }
}


// Definicion de la clase
//  class Model {
//   constructor() {
//     // The state of the model, an array of todo objects, prepopulated with some data
//     this.todos = [
//       {id: 1, text: 'Run a marathon', complete: false},
//       {id: 2, text: 'Plant a garden', complete: false},
//     ]
//   }
//
//  Agregado de los metodos correspondientes a la clase
//
//   addTodo(todoText) {
//     const todo = {
//       id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
//       text: todoText,
//       complete: false,
//     }
//
//     this.todos.push(todo)
//   }
//
//   // Map through all todos, and replace the text of the todo with the specified id
//   editTodo(id, updatedText) {
//     this.todos = this.todos.map((todo) =>
//       todo.id === id ? {id: todo.id, text: updatedText, complete: todo.complete} : todo,
//     )
//   }
//
//   // Filter a todo out of the array by id
//   deleteTodo(id) {
//     this.todos = this.todos.filter((todo) => todo.id !== id)
//   }
//
//   // Flip the complete boolean on the specified todo
//   toggleTodo(id) {
//     this.todos = this.todos.map((todo) =>
//       todo.id === id ? {id: todo.id, text: todo.text, complete: !todo.complete} : todo,
//     )
//   }
// }
