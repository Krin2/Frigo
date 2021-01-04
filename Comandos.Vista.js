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

    darFormatoInstrumento: function(elemento){
      elemento.children[1].style["font-size"]="1.5em";
      elemento.children[1].style["font-family"]="'Squada One', cursive";
    
      elemento.backgroundColor="rgba(100,100,100,1)";
      elemento.style.margin="3px 3px 3px 3px";
      elemento.style["border-color"]="black";
      elemento.style["border-radius"]="3px";
      elemento.style["width"]="140px";
      elemento.style["display"]="flex";
      elemento.style["color"]=" rgba(100,200,100,1)";
      elemento.style["justify-content"]="space-around";
    
      elemento.onmouseover=function(){
        this.style["border-color"]="red";
        this.style["border-style"]="solid";
        this.style["border-width"]="thin";
        this.style["text-shadow"]="0px 0px 10px rgba(100,1,0,1)";
      };
      elemento.onmouseleave=function(){
        this.style["border-color"]="black";
        this.style["border-style"]="solid";
        this.style["border-width"]="thin";
        this.style["text-shadow"]="none";
      };
    },
    // botonCambiarTitulo: function () {
    //     this.eventoCambiarTitulo.notificar(this.$textBoxTitulo.val());
    // },
    //
    // cambiarTitulo: function (sender, args) {
    //   var pTitulo = this.modelo.getTitulo();
    //   this.$pTitulo[0].textContent=pTitulo;
    // },

    comandosCSS: function(){
      this.$comandos[0].style["grid-area"]="comandos";
      this.$comandos[0].style["top-position"]="120px";
      this.$comandos[0].style.display= "grid";
      this.$comandos[0].style["grid-template-areas"]='"c0 c3 c6" "c1 c4 c7" "c2 c5 c8"';
      this.$comandos[0].style.gridTemplateColumns="33% 33% 33%";
      this.$comandos[0].style.gridTemplateRows="20px 20px 20px";

      
    },

};