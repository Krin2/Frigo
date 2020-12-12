var EstadosVista = function () {
    this.modelo = "";
    // this.eventoCambiarTitulo = new Eventosethis);
};

EstadosVista.prototype = {

    iniciar: function () {
        this.crearEstados();
            // .configurarManipuladores()
            // .habilitar();
        this.estadosCSS()},

    crearEstados: function () {
        // captura los objetos del html
        this.$contenedor = $('.contenedor');
        this.$estados = this.$contenedor.find('.estados');

        for(var i=0;i<8;i++){
          var tituloEstados=document.createElement("div");
          tituloEstados.className="titulo-estados";
          tituloEstados.textContent="Estados "+i;
          tituloEstados.style["grid-area"]="te"+i;
          this.$estados[0].appendChild(tituloEstados);

          var contenidoEstados=document.createElement("div");
          contenidoEstados.className="contenido-estados";
          contenidoEstados.textContent="Estados "+i;
          contenidoEstados.style["grid-area"]="ce"+i;
          this.$estados[0].appendChild(contenidoEstados);
        };
        this.$tituloEstados = this.$contenedor.find('.titulo-estados');
        this.$contenidoEstados = this.$contenedor.find('.contenido-estados');
      },

    configurarManipuladores: function () {
        // this.botonCambiarTituloManipulador= this.botonCambiarTitulo.bind(this);
        // this.cambiarTituloManipulador = this.cambiarTitulo.bind(this);
        return this;
    },

    habilitar: function () {
        // this.$botonCambiarTitulo.click(this.botonCambiarTituloManipulador);
        // this.modelo.eventoCambiarTitulo.adjuntar(this.cambiarTituloManipulador);
        return this;
    },

    // botonCambiarTitulo: function () {
    //     this.eventoCambiarTitulo.notificar(this.$textBoxTitulo.val());
    // },
    //
    // cambiarTitulo: function (sender, args) {
    //   var pTitulo = this.modelo.getTitulo();
    //   this.$pTitulo[0].textContent=pTitulo;
    // },

    estadosCSS: function(){
      // this.$estados[0].style["background-color"]="rgba(200,200,200,1)";
      this.$estados[0].style["grid-area"]="estados";
      this.$estados[0].style.display= "grid";
      this.$estados[0].style["grid-template-areas"]='"te0 ce0 ce4 te4" "te1 ce1 ce5 te5" "te2 ce2 ce6 te6" "te3 ce3 ce7 te7"';
      this.$estados[0].style["top-position"]="0px";
      this.$estados[0].style.gridTemplateColumns="80px auto auto 80px";
      this.$estados[0].style.gridTemplateRows="20px 20px 20px 20px";


      
      for(var i=0;i<8;i++){
        // Estilo titulo
        this.$tituloEstados[i].style.backgroundColor="rgba(100,100,100,1)";
        this.$tituloEstados[i].style.margin="1px 1px 1px 1px";
        this.$tituloEstados[i].style["border-color"]="black";
        this.$tituloEstados[i].style["border-radius"]="3px";

        this.$tituloEstados[i].style["color"]="black";
        this.$tituloEstados[i].style["padding-left"]="3px";

        // Estilo contenido
        this.$contenidoEstados[i].style.backgroundColor="rgba(0,0,200,1)";
        this.$contenidoEstados[i].style.margin="1px 1px 1px 1px";
        this.$contenidoEstados[i].style["border-color"]="black";
        this.$contenidoEstados[i].style["border-radius"]="3px";

        this.$contenidoEstados[i].style["color"]="white";
        this.$contenidoEstados[i].style["padding-left"]="3px";
        this.$contenidoEstados[i].style["font-family"]="'Orbitron', sans-serif";
        
      }
    },





}
