var ComandosVista = function () {
    this.modelo = "";
    this.listaInstrumentos=[];
    // this.eventoCambiarTitulo = new Eventos(this);
};

ComandosVista.prototype = {

    iniciar: function () {
        this.crearComandos();
            // .configurarManipuladores()
            // .habilitar();
        this.comandosCSS();
    },

    crearComandos: function () {
        // captura los objetos del html
        this.$contenedor = $('.contenedor');
        this.$comandos = this.$contenedor.find('.comandos');
        
        var comandos=[]; 
        for(var i=0;i<9;i++){
            comandos[i] = document.createElement("button");
            comandos[i].className="comando-boton";       
            comandos[i].textContent="Comando "+i;
            comandos[i].style["grid-area"]="c"+i;
            this.$comandos.append(comandos[i]);
        };

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

    comandosCSS: function(){
      this.$comandos[0].style["grid-area"]="comandos";
      this.$comandos[0].style["top-position"]="120px";
      this.$comandos[0].style.display= "grid";
      this.$comandos[0].style["grid-template-areas"]='"c0 c3 c6" "c1 c4 c7" "c2 c5 c8"';
      this.$comandos[0].style.gridTemplateColumns="33% 33% 33%";
      this.$comandos[0].style.gridTemplateRows="20px 20px 20px";

      
    },

};