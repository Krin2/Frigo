var ModuloCircuito= function(nombre,x,y,tipo){
  this.nombre=nombre;
  this.arrancarId="b-arrancar-"+this.nombre;
  this.detenerId="b-detener-"+this.nombre;
  this.tipo=tipo;
  this.x=x;
  this.y=y;
  this.estado='rgba(200,200,200,1)';
};


ModuloCircuito.prototype={
  iniciar:function(){
    this.bArrancar= document.getElementById(this.arrancarId);
    this.bDetener= document.getElementById(this.detenerId);

    this.bArrancar.style.color='rgba(118,118,118,1)';
    this.bArrancar.style.background='rgba(239,239,239,1)';
    this.bDetener.style.color='rgba(0,200,50,1)';
    this.bDetener.style.background='rgba(102,142,153,1)';

    this.bArrancar.onclick=this.arrancar.bind(this);
    this.bDetener.onclick=this.detener.bind(this);

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
    ctx.strokeStyle = this.estado;
    //canvas
    canvas.style.zIndex=1;
    canvas.style.position='absolute';
    canvas.style.top='0px';
    canvas.style.left='0px';
    ctx.globalCompositeOperation='source-over';

    ctx.beginPath();
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x,this.y+220);
    ctx.lineTo(this.x+10,this.y+220);
    ctx.lineTo(this.x+10,this.y+20);
    ctx.stroke();
    ctx.closePath();

    ctx.font = '20px Times New Roman';
    ctx.fillStyle = 'rgba(255,255,255,1)';

    ctx.fillText(this.nombre, this.x-10, this.y-2);
  },

  abrir:function(elem){
    if (this.giro===true){
      if (this.alfa<=90){
        this.alfa=this.apertura*9/10;
      }else{
        this.alfa=0;
      }
    }
    ctx.strokeStyle = this.estado;
    this.graficar();
    window.requestAnimationFrame(this.abrir.bind(this));
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
    if(f.tipo==='frio'){
      f.estado='rgba(0,50,200,1)';
    }else{
      f.estado='rgba(200,50,0,1)';
    }
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
};
