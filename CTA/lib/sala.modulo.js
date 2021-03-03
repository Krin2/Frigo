var ModuloSala= function(nombre,x,y,ancho, alto,canvas){
  this.nombre=nombre;
  this.arrancarId="b-arrancar-"+this.nombre;
  this.detenerId="b-detener-"+this.nombre;
  this.x=x;
  this.y=y;
  this.ancho=ancho;
  this.alto=alto;
  this.estado='rgba(100,100,100,1)';
  this.canvas=canvas;
  this.ctx = this.canvas.getContext('2d');
};



ModuloSala.prototype={
  iniciar:function(){
    this.graficar();
  },

  graficar: function(){
    var canvas=this.canvas;
    var ctx= this.ctx;
    //canvas
    canvas.style.zIndex=1;
    ctx.globalCompositeOperation='source-over';

    ctx.fillStyle = this.estado;
    ctx.strokeStyle = 'black';

    ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    ctx.strokeRect(this.x, this.y, this.ancho, this.alto);

    ctx.font = '20px Times New Roman';
    ctx.fillStyle = 'rgba(255,255,255,1)';

    ctx.fillText(this.nombre, this.x+4, this.y+this.alto/2);
  },

  getX:function(){
    return this.x;
  },
  getY:function(){
    return this.y;
  },
  getAncho:function(){
    return this.ancho;
  },
  getAlto:function(){
    return this.alto;
  },
  getNombre:function(){
    return this.nombre;
  },
  getEstado:function(){
    return this.estado;
  },
};
