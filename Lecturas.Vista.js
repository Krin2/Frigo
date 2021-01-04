var LecturasVista = function () {
    this.modelo = "";
    this.listaInstrumentos=[];
    // this.eventoCambiarTitulo = new Eventos(this);
};

LecturasVista.prototype = {

    iniciar: function () {
        this.crearLecturas();
            // .configurarManipuladores()
            // .habilitar();
        this.lecturasCSS();
    },

    crearLecturas: function () {
        // captura los objetos del html
        this.$contenedor = $('.contenedor');
        this.$lecturas = this.$contenedor.find('.lecturas');
        var instrumento=[]; 
        for(var i=0;i<8;i++){
        instrumento[i] = document.createElement("div");
        var tag= document.createElement("div");
        var unidad= document.createElement("div");
        var medicion=document.createElement("div");
        //asignacion de clase
        instrumento[i].className="instrumento";
        tag.className="nombre-instrumento";
        unidad.className="unidades";
        medicion.className="medicion-instrumento";

        //Asignacion de valores
        tag.textContent="PIT-100"+i;
        unidad.textContent="bar";
        medicion.textContent=i*7/2+i;

        instrumento[i].append(tag, medicion, unidad);
        instrumento[i].style["grid-area"]="l"+i;

        this.$lecturas[0].appendChild(instrumento[i]);

        this.darFormatoInstrumento(instrumento[i]);
        this.listaInstrumentos.push(instrumento[i]);
        };
        
        /* if (listaInstrumentos!==null){
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
        }; */
  
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

    lecturasCSS: function(){
      this.$lecturas[0].style["grid-area"]="lecturas";
      this.$lecturas[0].style["top-position"]="60px";
      this.$lecturas[0].style.display= "grid";
      this.$lecturas[0].style["grid-template-areas"]='"l0 l1 l2" "l3 l4 l5" "l6 l7 l8"';
      this.$lecturas[0].style.gridTemplateColumns="33% 33% 33%";
      this.$lecturas[0].style.gridTemplateRows="auto auto auto";

      
    },

};