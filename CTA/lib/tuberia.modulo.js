var ModuloTuberia= function(nombre,x,y,canvas){
  this.nombre=nombre;
  this.arrancarId="b-arrancar-"+this.nombre;
  this.detenerId="b-detener-"+this.nombre;
  this.x=x;
  this.y=y;
  this.estado='rgba(200,200,200,1)';
  this.canvas=canvas;
  this.ctx = this.canvas.getContext('2d');
};


ModuloTuberia.prototype={
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
    
    var canvas=this.canvas;
    var ctx= this.ctx;
      //canvas
    canvas.style.zIndex=1;
    ctx.globalCompositeOperation='source-over';


    ctx.fillStyle = this.estado;
    ctx.strokeStyle = 'rgba(20, 20, 20, 1)';

    switch(this.nombre){
      case 'T1':{
          //Salida CTA
        ctx.beginPath();
        ctx.moveTo(650, 180);
        ctx.lineTo(730, 180);
        ctx.lineTo(730, 370);
        ctx.lineTo(595, 370);
        ctx.lineTo(595, 400);

        ctx.lineTo(555, 400);
        ctx.lineTo(555, 370);
        ctx.lineTo(395, 370);
        ctx.lineTo(395, 400);

        ctx.lineTo(355, 400);
        ctx.lineTo(355, 370);
        ctx.lineTo(195, 370);
        ctx.lineTo(195, 400);

        ctx.lineTo(155, 400);
        ctx.lineTo(155, 330);
        ctx.lineTo(690, 330);
        ctx.lineTo(690, 220);
        ctx.lineTo(650, 220);
        ctx.lineTo(650, 180);

        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        break;
      }
      case 'T2':{
        //entrada CTA
        ctx.beginPath();
        ctx.moveTo(395, 500);
        ctx.lineTo(395, 580);
        ctx.lineTo(20, 580);
        ctx.lineTo(20, 240);
        ctx.lineTo(100, 240);
        ctx.lineTo(100, 280);
        ctx.lineTo(60, 280);
        ctx.lineTo(60, 540);
        ctx.lineTo(355, 540);
        ctx.lineTo(355, 500);
        ctx.lineTo(395, 500);

        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }
      case 'T3':{
        //entrada de aire externo
        ctx.fillRect(60, 120, 30, 40);
        ctx.strokeRect(60, 120, 30, 40);
      }
      case 'T4':{
        //entrada de aire externo
        ctx.fillRect(400, 180, 100, 40);
        ctx.strokeRect(400, 180, 100, 40);
      }
    }
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
    f.estado='rgba(130,237,231,0.5)';
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
