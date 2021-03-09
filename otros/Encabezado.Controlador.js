var EncabezadoControlador = function (modeloEncabezado, vistaEncabezado) {
    this.modeloEncabezado = modeloEncabezado;
    this.vistaEncabezado = vistaEncabezado;
    // this.vistaEncabezado.eventoCambiarTitulo.adjuntar(this);
};

EncabezadoControlador.prototype = {

    iniciar: function () {
      this.configurarManipuladores()
          .habilitar();
    },

    configurarManipuladores: function () {
        this.cambiarTituloManipulador=this.cambiarTitulo.bind(this);
        // this.actualizarFechaManipulador=this.actualizarFecha.bind(this);
        // this.actualizarHoraManipulador=this.actualizarHora.bind(this);
        return this;
    },

    habilitar: function () {
        this.vistaEncabezado.eventoCambiarTitulo.adjuntar(this.cambiarTituloManipulador);
        // this.vistaEncabezado.eventoActualizarFecha.adjuntar(this.actualizarFechaManipulador);
        // this.vistaEncabezado.eventoActualizarHora.adjuntar(this.actualizarHoraManipulador);
        return this;
    },

    cambiarTitulo: function (sender, args) {
        this.modeloEncabezado.cambiarTitulo(args);
    },

    // actualizarFecha: function (sender, args) {
    //     this.modeloEncabezado.actualizarFecha(args);
    // },

    // actualizarHora: function (sender, args) {
    //     this.modeloEncabezado.actualizarHora(args);
    // },


}
