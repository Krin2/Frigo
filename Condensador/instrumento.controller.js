// Controlador

// se usara de vinculo entre el modelo (con los datos) y la Vista

class controladorInstrumento {
  constructor(instrumento, VistaInstrumento) {
    this.model = instrumento
    this.view = vistaInstrumento
    this.mostrarInstrumentos(this.model.instrumento)
  }

  mostrarInstrumentos= (instrumento) =>{
    this.view.mostrarInstrumentos(listaInstrumentos)
  }

  // a continuacion colocamos todos los nexos entre vista y Modelo
  vinculoAgregarInstrumento(){
    this.model.agregarInstrumentos
  }
}

// class Controller {
//   constructor(model, view) {
//     this.model = model
//     this.view = view
//
//     // Display initial todos
//     this.onTodoListChanged(this.model.todos)
//   }
//
//   onTodoListChanged = (todos) => {
//     this.view.displayTodos(todos)
//   }
// }
