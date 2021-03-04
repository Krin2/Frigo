var ModuloFiltro= function(nombre,x,y,ancho,alto,canvas){
  this.nombre=nombre;
  this.arrancarId="b-arrancar-"+this.nombre;
  this.detenerId="b-detener-"+this.nombre;
  this.x=x;
  this.y=y;
  this.ancho=ancho;
  this.alto=alto;
  this.estado='rgba(200,200,200,1)';
  this.apertura=0;
  this.encendido=false;
  this.canvas=canvas;
  this.ctx = this.canvas.getContext('2d');
};



ModuloFiltro.prototype={
  iniciar:function(){
    // this.bArrancar= document.getElementById(this.arrancarId);
    // this.bDetener= document.getElementById(this.detenerId);

    // this.bArrancar.style.color='rgba(118,118,118,1)';
    // this.bArrancar.style.background='rgba(239,239,239,1)';
    // this.bDetener.style.color='rgba(0,200,50,1)';
    // this.bDetener.style.background='rgba(102,142,153,1)';

    // this.bArrancar.onclick=this.arrancar.bind(this);
    // this.bDetener.onclick=this.detener.bind(this);

    this.graficar();
  },

  arrancar:function(e){
    this.setEstado('on');
    this.graficar();
    this.bArrancar.style.color='rgba(0,200,50,1)';
    this.bArrancar.style.background='rgba(0,250,50,1)';
    this.bDetener.style.color='rgba(118,118,118,1)';
    this.bDetener.style.background='rgba(239,239,239,1)';
    window.requestAnimationFrame(this.abrir.bind(this));
  },
  detener:function(e){
    this.setEstado('off');
    this.graficar();
    this.bArrancar.style.color='rgba(118,118,118,1)';
    this.bArrancar.style.background='rgba(239,239,239,1)';
    this.bDetener.style.color='rgba(0,200,50,1)';
    this.bDetener.style.background='rgba(102,142,153,1)';
    window.cancelAnimationFrame(this.abrir.bind(this));
  },
  graficar: function(){

    this.ctx.strokeStyle = this.estado;
    //canvas
    this.canvas.style.zIndex=1;
    this.ctx.globalCompositeOperation='source-over';

    this.ctx.fillStyle = this.estado;
    this.ctx.strokeStyle = 'black';

    this.ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    this.ctx.strokeRect(this.x, this.y, this.ancho, this.alto);

    this.ctx.font = '15px Times New Roman';
    this.ctx.fillStyle = 'rgba(255,255,255,1)';

    this.ctx.fillText(this.nombre, this.x+2, this.y+20);
  },

  abrir:function(elem){
    if (this.giro===true){
      if (this.alfa<=90){
        this.alfa=this.apertura*9/10;
      }else{
        this.alfa=0;
      }
    }
    this.ctx.strokeStyle = this.estado;
    this.graficar();
    window.requestAnimationFrame(this.abrir.bind(this));
  },
  getX:function(){
    return this.x;
  },
  getY:function(){
    return this.y;
  },
  getNombre:function(){
    return this.nombre;
  },
  getEstado:function(){
    return this.estado;
  },
  setEstado:function(estado){
    switch (estado){
      case 'on':{this.setOn(this);break;}
      case 'off':{this.setOff(this); break;}
      case 'falla':{this.setFalla(this); break;}
      default:{this.setDefault(this)};
    }
  },
  setOn:function(f){
    f.estado='rgba(255,128,25,1)';
    f.encendido=true;
  },
  setOff:function(f){
    f.estado='rgba(200,200,200,1)';
    f.encendido=false;
  },
  setDefault:function(f){
    f.estado='rgba(255,128,64,1)';
  },
  setFalla:function(f){
    f.estado='rgba(255,0,0,1)';
  },

};
