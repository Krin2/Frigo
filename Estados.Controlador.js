var EstadosControlador = function (modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
};

EstadosControlador.prototype = {

    iniciar: function () {
      this.configurarManipuladores()
          .habilitar();
    },

    configurarManipuladores: function () {
        this.llenarTitulosManipulador=this.llenarTitulos.bind(this);
        this.actualizarContenidoManipulador=this.actualizarContenido.bind(this);
        return this;
    },

    habilitar: function () {
        this.vista.eventoLlenarTitulos.adjuntar(this.llenarTitulosManipulador);
        this.vista.eventoActualizarContenido.adjuntar(this.actualizarContenidoManipulador);
        return this;
    },

    llenarTitulos: function (sender, args) {
        this.modelo.llenarTitulos(args);
    },
    actualizarContenido: function (sender, args) {
        this.modelo.actualizarContenido(args);
    },
}

