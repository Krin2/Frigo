var EncabezadoVista = function (modelo) {
    this.modelo = modelo;
    this.eventoCambiarTitulo = new Eventos(this);
};

EncabezadoVista.prototype = {

    iniciar: function () {
        this.crearEncabezado()
            .configurarManipuladores()
            .habilitar();
        this.contenedorCSS();
        this.encabezadoCSS();
    },

    crearEncabezado: function () {
        // captura los objetos del html
        this.$contenedor = $('.contenedor');
        this.$encabezado = $('.encabezado');
        this.$botonCambiarTitulo = this.$contenedor.find('.boton-cambiar');
        this.$textBoxTitulo = this.$contenedor.find('.textbox-titulo');
        this.$pTitulo = this.$contenedor.find('.p-titulo');
        this.$pFecha = this.$contenedor.find('.p-fecha');
        this.$pHora = this.$contenedor.find('.p-hora')



        return this;
      },

    configurarManipuladores: function () {
        this.botonCambiarTituloManipulador= this.botonCambiarTitulo.bind(this);
        this.cambiarTituloManipulador = this.cambiarTitulo.bind(this);
        return this;
    },

    habilitar: function () {
        this.$botonCambiarTitulo.click(this.botonCambiarTituloManipulador);
        this.modelo.eventoCambiarTitulo.adjuntar(this.cambiarTituloManipulador);
        return this;
    },

    botonCambiarTitulo: function () {
        this.eventoCambiarTitulo.notificar(this.$textBoxTitulo.val());
    },

    cambiarTitulo: function (sender, args) {
      var pTitulo = this.modelo.getTitulo();
      this.$pTitulo[0].textContent=pTitulo;
    },

    // -------------Estilos
    contenedorCSS:function(){
      this.$contenedor[0].style.display= "grid";
      this.$contenedor[0].style.backgroundColor= "black";
      this.$contenedor[0].style.padding= "10px";
      this.$contenedor[0].style.color= "white";
      this.$contenedor[0].style["position"]="absolute";
      this.$contenedor[0].style["top-position"]="20px";
      this.$contenedor[0].style.width="100%";
 
      this.$contenedor[0].style["grid-template-areas"]='"encabezado encabezado""menu estados""menu lecturas""menu comandos"';
      this.$contenedor[0].style.gridTemplateColumns="80px auto";
      this.$encabezado[0].style.gridTemplateRows="60px auto auto auto";
    },

    encabezadoCSS: function(){
      this.$encabezado[0].style["top-position"]="0px";
      this.$encabezado[0].style["grid-area"]="encabezado";
      this.$encabezado[0].style.display= "grid";
      this.$encabezado[0].style["grid-template-areas"]= '"t1c1 t1c2 t1c3""t2c1 t2c2 t2c3""t3c1 t3c2 t3c3"';
      this.$encabezado[0].style.gridTemplateColumns="auto 120px 100px";
      this.$encabezado[0].style.gridTemplateRows="20px 20px 20px";
      

      this.$pTitulo[0].justifyContent="left";
      this.$textBoxTitulo[0].style["grid-area"]="t1c1";
      this.$botonCambiarTitulo[0].style["grid-area"]="t2c1";
      this.$pTitulo[0].style["grid-area"]="t3c1";

      this.$pFecha[0].justifyContent="right";
      this.$pFecha[0].style["grid-area"]="t1c2";
      this.$pFecha[0].style["font-family"]="'Orbitron', sans-serif";
      this.$pFecha[0].style.color= "rgba(0,180,180,1)";

      this.$pHora[0].justifyContent="right";
      this.$pHora[0].style["grid-area"]="t1c3";
      this.$pHora[0].style["font-family"]="'Orbitron', sans-serif";
      this.$pHora[0].style.color= "rgba(0,200,200,1)";


    }

}
