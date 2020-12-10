var EncabezadoVista = function (modelo) {
    this.modelo = modelo;
    this.eventoCambiarTitulo = new Eventos(this);
    this.eventoActualizarFecha=new Eventos(this);
    this.eventoActualizarHora=new Eventos(this);
};

EncabezadoVista.prototype = {

    iniciar: function () {
        this.crearEncabezado()
            .configurarManipuladores()
            .habilitar();

        this.actualizarFecha();
        this.actualizarHora();
    },

    crearEncabezado: function () {
        // captura los objetos del html
        this.$contenedor = $('.contenedor');
        this.$botonCambiarTitulo = this.$contenedor.find('.boton-cambiar');
        this.$textBoxTitulo = this.$contenedor.find('.textbox-titulo');
        this.$pTitulo = this.$contenedor.find('.p-titulo');
        this.$pFecha = this.$contenedor.find('.p-fecha');
        this.$pHora = this.$contenedor.find('.p-hora');
        // this.armarEncabezado();
        return this;
      },

    configurarManipuladores: function () {
        this.botonCambiarTituloManipulador= this.botonCambiarTitulo.bind(this);

        this.cambiarTituloManipulador = this.cambiarTitulo.bind(this);
        this.actualizarFechaManipulador = this.actualizarFecha.bind(this);
        this.actualizarHoraManipulador = this.actualizarHora.bind(this);
        return this;
    },

    habilitar: function () {
        this.$botonCambiarTitulo.click(this.botonCambiarTituloManipulador);
        this.$pFecha.change(this.actualizarFechaManipulador);
        this.$pHora.change(this.actualizarHoraManipulador);

        this.modelo.eventoCambiarTitulo.adjuntar(this.cambiarTituloManipulador);
        this.modelo.eventoActualizarFecha.adjuntar(this.actualizarFechaManipulador);
        this.modelo.eventoActualizarHora.adjuntar(this.actualizarHoraManipulador);
        return this;
    },

    botonCambiarTitulo: function () {
        this.eventoCambiarTitulo.notificar(this.$textBoxTitulo.val());
    },

    cambiarTitulo: function (sender, args) {
      var pTitulo = this.modelo.getTitulo();
      this.$pTitulo[0].textContent=pTitulo;
      this.$pTitulo.show();
    },

    actualizarFecha: function(){
        this.$pFecha[0].textContent= this.modelo.getFecha();
        this.eventoActualizarFecha.notificar(this.$pFecha);
    },

    actualizarHora: function(){
        this.$pHora[0].textContent= this.modelo.getHora();
        this.eventoActualizarHora.notificar(this.$pHora);
    }


    // armarEncabezado:{
    //   var encabezado= document.createElement('article');
    //   var tituloEncabezado= document.createElement('h1');
    //   encabezado.className="Titulo";
    //   tituloEncabezado.textContent=this.getTitulo();
    //   encabezado.addChild(tituloEncabezado);
    //   this.$contenedor.addChild(encabezado);
    // },

}
