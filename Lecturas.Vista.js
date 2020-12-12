var LecturasVista = function () {
    this.modelo = "";
    // this.eventoCambiarTitulo = new Eventos(this);
};

LecturasVista.prototype = {

    iniciar: function () {
        this.crearLecturas
    ();
            // .configurarManipuladores()
            // .habilitar();
        this.lecturasCSS();
    },

    crearLecturas
: function () {
        // captura los objetos del html
        this.$contenedor = $('.contenedor');
        this.$lecturas
     = this.$contenedor.find('.lecturas');

        for(var i=0;i<3;i++){
          var opcion=document.createElement("button");
          opcion.className="opcion";
          opcion.textContent="Opcion "+i;
          opcion.style["grid-area"]="m"+i;
          this.$lecturas[0].appendChild(opcion);
        };
        this.$opcion = this.$contenedor.find('.opcion');

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

    lecturasCSS: function(){
      this.$lecturas
    [0].style["grid-area"]="lecturas";
      this.$lecturas[0].style.display= "grid";
      this.$lecturas[0].style["grid-template-areas"]='"m0" "m1" "m2"';
      this.$lecturas[0].style["top-position"]="60px";
      this.$lecturas[0].style.gridTemplateColumns="80px";
      this.$lecturas[0].style.gridTemplateRows="20px 20px 20px";

      for(var i=0;i<3;i++){
        this.$opcion[i].style.backgroundColor="grey";
        this.$opcion[i].style.margin="1px 1px 1px 1px";
        this.$opcion[i].style["border-color"]="black";
        this.$opcion[i].style["border-radius"]="3px";
      }
    },





}
