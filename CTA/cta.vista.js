$(function () {
  var modeloCTA=new ModeloCTA();
  var vistaCTA = new CTAVista(modeloCTA);
  vistaCTA.iniciar();

  var modeloForzador1 = new ModuloForzador();
  var vistaForzador1 = new ForzadorVista(modeloForzador1);
  var controladForzador1 = new ForzadorControl(modeloForzador1, vistaForzador1);
});

var CTAVista = function (modelo) {
    this.modelo = modelo;
    this.eventoArrancar = new Eventos(this);
};

CTAVista.prototype = {

    iniciar: function () {
        this.crearEncabezado();
        this.crearGrafico();
        this.crearComando();

        this.configurarManipuladores()
            .habilitar();
    },

    configurarManipuladores:function(){
      this.botonArrancarManipulador= this.botonArrancar.children.item.bind(this);
      this.arrancarManipulador = this.arrancar.bind(this);
      return this;
    },

    habilitar: function () {
        this.botonArrancar.click(this.botonArracarManipulador);
        this.modelo.forzador1.eventoArrancar.adjuntar(this.arrancarManipulador);
        return this;
    },

    botonArrancar:function(){
      this.modelo.forzador1.setMarcha(true);
    },

    crearGrafico: function () {
        //dibujo Fondo
        borrarPantalla();

        //Salas
        dibujarSala(this.modelo.salaCTA.getX(),this.modelo.salaCTA.getY(),this.modelo.salaCTA.getAncho(),this.modelo.salaCTA.getAlto(),this.modelo.salaCTA.getEstado(),this.modelo.salaCTA.getNombre());
        dibujarSala(this.modelo.salaVestuarios.getX(),this.modelo.salaVestuarios.getY(),this.modelo.salaVestuarios.getAncho(),this.modelo.salaVestuarios.getAlto(),this.modelo.salaVestuarios.getEstado(),this.modelo.salaVestuarios.getNombre());
        dibujarSala(this.modelo.salaEnvasados.getX(),this.modelo.salaEnvasados.getY(),this.modelo.salaEnvasados.getAncho(),this.modelo.salaEnvasados.getAlto(),this.modelo.salaEnvasados.getEstado(),this.modelo.salaEnvasados.getNombre());
        dibujarSala(this.modelo.salaBobinas.getX(),this.modelo.salaBobinas.getY(),this.modelo.salaBobinas.getAncho(),this.modelo.salaBobinas.getAlto(),this.modelo.salaBobinas.getEstado(),this.modelo.salaBobinas.getNombre());

        //dibujo esquema tuberias
        dibujarTuberiaSalidaCTA(this.modelo.tuberiaSalidaCTA.getX(),this.modelo.tuberiaSalidaCTA.getY(),this.modelo.tuberiaSalidaCTA.getEstado(),this.modelo.tuberiaSalidaCTA.getNombre());
        dibujarTuberiaEntradaCTA(this.modelo.tuberiaEntradaCTA.getX(),this.modelo.tuberiaEntradaCTA.getY(),this.modelo.tuberiaEntradaCTA.getEstado(),this.modelo.tuberiaEntradaCTA.getNombre());
        dibujarTuberiaEntradaAireExterno(this.modelo.tuberiaEntradaAireExterno.getX(),this.modelo.tuberiaEntradaAireExterno.getY(),this.modelo.tuberiaEntradaAireExterno.getEstado(),this.modelo.tuberiaEntradaAireExterno.getNombre());

        //filtros
        dibujarFiltro(this.modelo.filtroPrimario.getX(),this.modelo.filtroPrimario.getY(),this.modelo.filtroPrimario.getEstado(),this.modelo.filtroPrimario.getNombre());
        dibujarFiltro(this.modelo.filtroSecundario.getX(),this.modelo.filtroSecundario.getY(),this.modelo.filtroSecundario.getEstado(),this.modelo.filtroSecundario.getNombre());
        dibujarFiltro(this.modelo.filtroAbsoluto.getX(),this.modelo.filtroAbsoluto.getY(),this.modelo.filtroAbsoluto.getEstado(),this.modelo.filtroAbsoluto.getNombre());

        //sistema de refrigeracion
        dibujarCircuito(this.modelo.circuitoFrio.getX(),this.modelo.circuitoFrio.getY(),this.modelo.circuitoFrio.getEstado(),this.modelo.circuitoFrio.getNombre());
        dibujarCircuito(this.modelo.circuitoCalor.getX(),this.modelo.circuitoCalor.getY(),this.modelo.circuitoCalor.getEstado(),this.modelo.circuitoCalor.getNombre());

        //Rejas
        dibujarReja(this.modelo.rejaAireEntrada.getX(),this.modelo.rejaAireEntrada.getY(),this.modelo.rejaAireEntrada.getEstado(),this.modelo.rejaAireEntrada.getNombre(),this.modelo.rejaAireEntrada.getDireccion());
        dibujarReja(this.modelo.rejaSalaBobinas.getX(),this.modelo.rejaSalaBobinas.getY(),this.modelo.rejaSalaBobinas.getEstado(),this.modelo.rejaSalaBobinas.getNombre(),this.modelo.rejaSalaBobinas.getDireccion());
        dibujarReja(this.modelo.rejaSalaVestuarios.getX(),this.modelo.rejaSalaVestuarios.getY(),this.modelo.rejaSalaVestuarios.getEstado(),this.modelo.rejaSalaVestuarios.getNombre(),this.modelo.rejaSalaVestuarios.getDireccion());

          //Forzadores
          // this.modelo.forzador1.graficar(ctx);
          // this.modelo.forzador2.graficar(ctx);
          // this.modelo.forzador3.graficar(ctx);
          // this.modelo.forzador4.graficar(ctx);
        // dibujarForzador(this.modelo.forzador1.getX(),this.modelo.forzador1.getY(),this.modelo.forzador1.getEstado(),this.modelo.forzador1.getNombre());
        // dibujarForzador(this.modelo.forzador2.getX(),this.modelo.forzador2.getY(),this.modelo.forzador2.getEstado(),this.modelo.forzador2.getNombre());
        // dibujarForzador(this.modelo.forzador3.getX(),this.modelo.forzador3.getY(),this.modelo.forzador3.getEstado(),this.modelo.forzador3.getNombre());
        // dibujarForzador(this.modelo.forzador4.getX(),this.modelo.forzador4.getY(),this.modelo.forzador4.getEstado(),this.modelo.forzador4.getNombre());

        //dibujo instrumento

        return this;
      },

    crearEncabezado: function () {
        // captura los objetos del html
        this.$contenedor = $('.contenedor');
        this.$encabezado = $('.encabezado');
        this.$pTitulo = this.$contenedor.find('.p-titulo');
        this.$pFecha = this.$contenedor.find('.p-fecha');
        this.$pHora = this.$contenedor.find('.p-hora');
        this.contenedorCSS();
        this.encabezadoCSS();

        return this;
      },

    crearComando: function () {
        // captura los objetos del html
        this.$contenedor = $('.contenedor');
        $comando = $('.comando');
        this.botonArrancar=document.createElement("button");
        this.botonParar=document.createElement("button");
        this.botonArrancar.textContent="ARRANCAR";
        this.botonParar.textContent="PARAR";
        this.botonArrancar.addEventListener('click',arrancar(this));
        this.botonParar.addEventListener('click',detener(this));
        $comando.append(this.botonArrancar);
        $comando.append(this.botonParar);
      },
      // -------------Estilos
      contenedorCSS:function(){
        this.$contenedor[0].style.backgroundColor= "black";
        this.$contenedor[0].style.padding= "10px";
        this.$contenedor[0].style.color= "white";
        this.$contenedor[0].style["position"]="absolute";
        this.$contenedor[0].style["top-position"]="20px";
        this.$contenedor[0].style.width="100%";
        this.$contenedor[0].style.height="100%";
      },

      encabezadoCSS: function(){
        this.$encabezado[0].style.display="grid";
        this.$encabezado[0].style["top-position"]="0px";
        this.$encabezado[0].style["grid-template-areas"]='"t1c1 t1c2 t1c3" "t2c1 t2c2 t2c3" "t3c1 t3c2 t3c3"';
        this.$encabezado[0].style.gridTemplateColumns="60% 10% 10%";
        this.$encabezado[0].style.gridTemplateRows="20px 20px 20px";

        this.$pTitulo[0].justifyContent="left";
        this.$pTitulo[0].style["grid-area"]="t3c1";

        this.$pFecha[0].justifyContent="right";
        this.$pFecha[0].style["grid-area"]="t1c2";
        this.$pFecha[0].style.color= "rgba(0,180,180,1)";

        this.$pHora[0].justifyContent="right";
        this.$pHora[0].style["grid-area"]="t1c3";
        this.$pHora[0].style.color= "rgba(0,200,200,1)";
      },

      arrancar: function(elemento){
        elemento.modelo.forzador1.setMarcha(true,ctx);
        elemento.modelo.forzador1.eventoArrancar.notificar();
        elemento.modelo.forzador2.setMarcha(true,ctx);
        elemento.modelo.forzador2.eventoArrancar.notificar();
        elemento.modelo.forzador3.setMarcha(true,ctx);
        elemento.modelo.forzador3.eventoArrancar.notificar();
        elemento.modelo.forzador4.setMarcha(true,ctx);
        elemento.modelo.forzador4.eventoArrancar.notificar();
        actualizarForzador(elemento.modelo.forzador1);
        actualizarForzador(elemento.modelo.forzador2);
        actualizarForzador(elemento.modelo.forzador3);
        actualizarForzador(elemento.modelo.forzador4);
      }
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

/* var dibujarMenu =function(modelo){
  var botonArrancar=dibujarBoton('Arranque',5,20,arrancar(modelo));
  var botonParar=dibujarBoton('Parada',5,50,detener(modelo));
}

var dibujarBoton=function(nombre,x,y,callback){
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'grey';
  ctx.strokeStyle = 'black';
  resaltar();

  ctx.fillRect(x, y, 80, 20);
  ctx.strokeRect(x, y, 80, 20);

  ctx.font = '20px Times New Roman';
  ctx.fillStyle = 'rgba(255,255,255,1)';

  ctx.fillText(nombre, x+2, y+16);
}*/

var arrancar= function(elemento){
  elemento.modelo.forzador1.setMarcha(true,ctx);
  elemento.modelo.forzador1.eventoArrancar.notificar();
  elemento.modelo.forzador2.setMarcha(true,ctx);
  elemento.modelo.forzador2.eventoArrancar.notificar();
  elemento.modelo.forzador3.setMarcha(true,ctx);
  elemento.modelo.forzador3.eventoArrancar.notificar();
  elemento.modelo.forzador4.setMarcha(true,ctx);
  elemento.modelo.forzador4.eventoArrancar.notificar();
  actualizarForzador(elemento.modelo.forzador1);
  actualizarForzador(elemento.modelo.forzador2);
  actualizarForzador(elemento.modelo.forzador3);
  actualizarForzador(elemento.modelo.forzador4);
  // elemento.modelo.forzador1.graficar(ctx);
  // elemento.modelo.forzador2.graficar(ctx);
  // elemento.modelo.forzador3.graficar(ctx);
  // elemento.modelo.forzador4.graficar(ctx);

  // raf = window.requestAnimationFrame(elemento.crearGrafico());
}
var detener= function(elemento){
  elemento.modelo.forzador1.setMarcha(false,ctx);
  elemento.modelo.forzador1.eventoDetener.notificar();
  elemento.modelo.forzador2.setMarcha(false,ctx);
  elemento.modelo.forzador2.eventoDetener.notificar();
  elemento.modelo.forzador3.setMarcha(false,ctx);
  elemento.modelo.forzador3.eventoDetener.notificar();
  elemento.modelo.forzador4.setMarcha(false,ctx);
  elemento.modelo.forzador4.eventoDetener.notificar();
  actualizarForzador(elemento.modelo.forzador1);
  actualizarForzador(elemento.modelo.forzador2);
  actualizarForzador(elemento.modelo.forzador3);
  actualizarForzador(elemento.modelo.forzador4);
  // elemento.modelo.forzador1.graficar(ctx);
  // elemento.modelo.forzador2.graficar(ctx);
  // elemento.modelo.forzador3.graficar(ctx);
  // elemento.modelo.forzador4.graficar(ctx);
}

var dibujarSala=function(x,y,ancho,alto,colorFondo,nombre){
  var canvas10 = document.getElementById('canvas');
  var ctx10 = canvas10.getContext('2d');
  ctx10.fillStyle = colorFondo;
  ctx10.strokeStyle = 'black';
  noResaltar();

  ctx10.fillRect(x, y, ancho, alto);
  ctx10.strokeRect(x, y, ancho, alto);

  ctx10.font = '20px Times New Roman';
  ctx10.fillStyle = 'rgba(255,255,255,1)';
  resaltar();

  ctx10.fillText(nombre, x+4, y+alto/2);
}

var dibujarForzador=function(x,y,colorFondo,nombre){
  var canvas40 = document.getElementById('canvas');
  var ctx40 = canvas10.getContext('2d');
  ctx.fillStyle = colorFondo;
  ctx.strokeStyle = 'black';
  noResaltar();

  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2,0);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.font = '20px Times New Roman';
  ctx.fillStyle = 'rgba(255,255,255,1)';
  resaltar();

  ctx.fillText(nombre, x-10, y+5);
  window.requestAnimationFrame(dibujarForzador);
}

var dibujarFiltro= function(x,y,colorFondo,nombre){
  var canvas15 = document.getElementById('canvas');
  var ctx15 = canvas15.getContext('2d');
  ctx15.fillStyle = colorFondo;
  ctx15.strokeStyle = 'black';
  noResaltar();

  ctx15.fillRect(x, y, 25, 200);
  ctx15.strokeRect(x, y, 25, 200);


  ctx15.font = '20px Times New Roman';
  ctx15.fillStyle = 'rgba(255,255,255,1)';
  resaltar();

  ctx15.fillText(nombre, x+2, y-2);
}

var dibujarReja=function(x,y,colorFondo,nombre,direccion){
  var canvas20 = document.getElementById('canvas');
  var ctx20 = canvas20.getContext('2d');
  ctx20.strokeStyle = colorFondo;
  noResaltar();

  ctx20.beginPath();
  ctx20.moveTo(x,y);
  if (direccion==="vertical"){
    for (var i=1;i<5;i++){
      ctx20.lineTo(x-10,y+10*i);
      ctx20.lineTo(x,y+10*i);
    }
  }else{
    for (var i=1;i<5;i++){
      ctx20.lineTo(x+10*i,y+10);
      ctx20.lineTo(x+10*i,y);
    }
  }
  ctx20.stroke();
  ctx20.closePath();

  ctx20.font = '20px Times New Roman';
  ctx20.fillStyle = 'rgba(255,255,255,1)';
  resaltar();
  if (direccion==="vertical"){
    ctx20.fillText(nombre, x+2, y+30);
  }else{
    ctx20.fillText(nombre, x-2, y+30);
  }
}

var dibujarCircuito=function(x,y,colorFondo,nombre){
  var canvas25 = document.getElementById('canvas');
  var ctx25 = canvas25.getContext('2d');
  ctx25.strokeStyle = colorFondo;
  noResaltar();

  ctx25.beginPath();
  ctx25.moveTo(x,y);
  ctx25.lineTo(x,y+220);
  ctx25.lineTo(x+10,y+220);
  ctx25.lineTo(x+10,y+20);
  ctx25.stroke();
  ctx25.closePath();

  ctx25.font = '20px Times New Roman';
  ctx25.fillStyle = 'rgba(255,255,255,1)';
  resaltar();

  ctx25.fillText(nombre, x-10, y-2);
}

var dibujarTuberiaSalidaCTA=function(x,y,colorFondo,nombre){
  var canvas30 = document.getElementById('canvas');
  var ctx30 = canvas30.getContext('2d');
  ctx30.fillStyle = colorFondo;
  ctx30.strokeStyle = 'rgba(20, 20, 20, 1)';
  noResaltar();
    //Salida CTA
  ctx30.beginPath();
  ctx30.moveTo(650, 180);
  ctx30.lineTo(730, 180);
  ctx30.lineTo(730, 370);
  ctx30.lineTo(595, 370);
  ctx30.lineTo(595, 400);

  ctx30.lineTo(555, 400);
  ctx30.lineTo(555, 370);
  ctx30.lineTo(395, 370);
  ctx30.lineTo(395, 400);

  ctx30.lineTo(355, 400);
  ctx30.lineTo(355, 370);
  ctx30.lineTo(195, 370);
  ctx30.lineTo(195, 400);

  ctx30.lineTo(155, 400);
  ctx30.lineTo(155, 330);
  ctx30.lineTo(690, 330);
  ctx30.lineTo(690, 220);
  ctx30.lineTo(650, 220);
  ctx30.lineTo(650, 180);

  ctx30.fill();
  ctx30.stroke();
  ctx30.closePath();
}

var dibujarTuberiaEntradaCTA=function(x,y,colorFondo,nombre){
  var canvas30 = document.getElementById('canvas');
  var ctx30 = canvas30.getContext('2d');
  ctx30.fillStyle = colorFondo;
  ctx30.strokeStyle = 'rgba(20, 20, 20, 1)';
  noResaltar();

  ctx30.beginPath();
  ctx30.moveTo(395, 500);
  ctx30.lineTo(395, 580);
  ctx30.lineTo(20, 580);
  ctx30.lineTo(20, 240);
  ctx30.lineTo(100, 240);
  ctx30.lineTo(100, 280);
  ctx30.lineTo(60, 280);
  ctx30.lineTo(60, 540);
  ctx30.lineTo(355, 540);
  ctx30.lineTo(355, 500);
  ctx30.lineTo(395, 500);

  ctx30.fill();
  ctx30.stroke();
  ctx30.closePath();
}

var dibujarTuberiaEntradaAireExterno=function(x,y,colorFondo,nombre){
  var canvas30 = document.getElementById('canvas');
  var ctx30 = canvas.getContext('2d');
  ctx30.fillStyle = colorFondo;
  ctx30.strokeStyle = 'rgba(20, 20, 20, 1)';
  noResaltar();
    //entrada de aire externo
  ctx30.fillRect(60, 120, 40, 40);
  ctx30.strokeRect(60, 120, 40, 40);
}

var resaltar= function(){
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'rgba(0, 0, 200, 0.5)';
}

var noResaltar= function(){
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowColor = 'none';
}

var borrarPantalla=function() {
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

var actualizarForzador=function(f){

    ctx.fillStyle = f.estado;
    ctx.strokeStyle = 'black';
    noResaltar();

    ctx.beginPath();
    ctx.arc(f.x, f.y, 30, 0, Math.PI * 2,0);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();


}
