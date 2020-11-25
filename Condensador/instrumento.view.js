

class VistaInstrumento {

  constructor() {
    //creacion de los elementos del DOM
     mostrarInstrumentos();
     }
  }

  VistaInstrumento.prototype.mostrarInstrumentos = function (listaInstrumentos) {
    var $contexto= document.querySelector("#Lecturas");
    var $columna= document.querySelector("#Lecturas").querySelector(".columna_1");

    //Creacion de cada elemento instrumento
    if (listaInstrumentos!==null){
      listaInstrumentos.forEach(elemento => {
        var instrumento = document.createElement("div")
        var tag= document.createElement("div")
        var unidad= document.createElement("div")
        var medicion=document.createElement("div")
        //asignacion de clase
        instrumento.className="instrumento";
        tag.className="nombre-instrumento";
        unidad.className="unidades";
        medicion.className="medicion-instrumento";

        //Asignacion de valores
        tag.textContent=elemento.tag;
        unidad.textContent=elemento.unidad;
        medicion.textContent=elemento.medicion;

        //incorporacion de elementos al contexto
        instrumento.append(tag, medicion, unidad);
        $columna.append(instrumento);
      });
  };
}

// class View {
//   constructor() {
//     // The root element
//     this.app = this.getElement('#root')
//
//     // The title of the app
//     this.title = this.createElement('h1')
//     this.title.textContent = 'Todos'
//
//     // The form, with a [type="text"] input, and a submit button
//     this.form = this.createElement('form')
//
//     this.input = this.createElement('input')
//     this.input.type = 'text'
//     this.input.placeholder = 'Add todo'
//     this.input.name = 'todo'
//
//     this.submitButton = this.createElement('button')
//     this.submitButton.textContent = 'Submit'
//
//     // The visual representation of the todo list
//     this.todoList = this.createElement('ul', 'todo-list')
//
//     // Append the input and submit button to the form
//     this.form.append(this.input, this.submitButton)
//
//     // Append the title, form, and todo list to the app
//     this.app.append(this.title, this.form, this.todoList)
//   }
//   // ...
// }
