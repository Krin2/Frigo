var MenuVista = function () {
    this.modelo = "";
    // this.eventoCambiarTitulo = new Eventos(this);
};

MenuVista.prototype = {

    iniciar: function () {
        this.crearMenu();
            // .configurarManipuladores()
            // .habilitar();
        this.menuCSS();
    },

    crearMenu: function () {
        // captura los objetos del html
        this.$contenedor = $('.contenedor');
        this.$menu = this.$contenedor.find('.menu');

        for(var i=0;i<3;i++){
          var opcion=document.createElement("button");
          opcion.className="opcion";
          opcion.textContent="Opcion "+i;
          opcion.style["grid-area"]="m"+i;
          this.$menu[0].appendChild(opcion);
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

    menuCSS: function(){
      this.$menu[0].style["grid-area"]="menu";
      this.$menu[0].style.display= "grid";
      this.$menu[0].style["grid-template-areas"]='"m0" "m1" "m2"';
      this.$menu[0].style["top-position"]="0px";
      this.$menu[0].style.gridTemplateColumns="80px";
      this.$menu[0].style.gridTemplateRows="20px 20px 20px";

      for(var i=0;i<3;i++){
        this.$opcion[i].style.backgroundColor="grey";
        this.$opcion[i].style.margin="1px 1px 1px 1px";
        this.$opcion[i].style["border-color"]="black";
        this.$opcion[i].style["border-radius"]="3px";
      }
    },





}
