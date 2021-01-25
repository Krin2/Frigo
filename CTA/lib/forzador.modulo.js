var ModuloForzador= function(nombre,x,y){
  this.nombre=nombre;
  this.arrancarId="b-arrancar-"+this.nombre;
  this.detenerId="b-detener-"+this.nombre;
  this.x=x;
  this.y=y;
  this.estado='rgba(200,200,200,1)';
  this.velocidad=0;
  this.elice={
    xi:this.x,
    yi:this.y,
    alfa:0,
    dx:30,
    dy:0,
    girar:false
  };
};

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ModuloForzador.prototype={
  iniciar: function(){
    this.bArrancar= document.getElementById(this.arrancarId);
    this.bDetener= document.getElementById(this.detenerId);
    this.bVelocidad = document.getElementById("vel-"+this.nombre);

    this.bArrancar.style.color='rgba(118,118,118,1)';
    this.bArrancar.style.background='rgba(239,239,239,1)';
    this.bDetener.style.color='rgba(0,200,50,1)';
    this.bDetener.style.background='rgba(102,142,153,1)';

    this.bArrancar.onclick=this.arrancar.bind(this);
    this.bDetener.onclick=this.detener.bind(this);
    this.bVelocidad.onchange=this.cambiarVelocidad.bind(this);

    this.setVelocidad(parseFloat(this.bVelocidad.value));
    this.graficar();
  },
  arrancar:function(e){
    this.setEstado('on');
    this.graficar();
    this.bArrancar.style.color='rgba(0,200,50,1)';
    this.bArrancar.style.background='rgba(0,250,50,1)';
    this.bDetener.style.color='rgba(118,118,118,1)';
    this.bDetener.style.background='rgba(239,239,239,1)';
    window.requestAnimationFrame(this.girar.bind(this));
  },
  detener:function(e){
    this.setEstado('off');
    this.graficar();
    this.bArrancar.style.color='rgba(118,118,118,1)';
    this.bArrancar.style.background='rgba(239,239,239,1)';
    this.bDetener.style.color='rgba(0,200,50,1)';
    this.bDetener.style.background='rgba(102,142,153,1)';
    window.cancelAnimationFrame(this.girar.bind(this));
  },
  cambiarVelocidad:function(e){
    this.setVelocidad(parseFloat(e.target.value));
  },

  setVelocidad:function(velocidad){
    this.velocidad=velocidad;
  },

  setEstado:function(estado){
    switch (estado){
      case 'on':{this.setOn(this);break;}
      case 'off':{this.setOff(this); break;}
      case 'falla':{this.setFalla(this); break;}
      default:{this.setDefault(this)};
    }
  },

  graficar: function(){

    //canvas
    ctx.globalCompositeOperation='source-over';
    canvas.style.zIndex=1;
    canvas.style.position='absolute';
    canvas.style.top='0px';
    canvas.style.left='0px';

    ctx.fillStyle = this.estado;
    ctx.strokeStyle = 'rgba(0,0,0,0.8)';
    ctx.lineWidth=1;

    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2,0);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2,0);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();

    ctx.moveTo(this.elice.xi, this.elice.yi);
    ctx.lineTo(this.elice.xi+this.elice.dx, this.elice.yi+this.elice.dy);
    ctx.lineTo(this.elice.xi-this.elice.dx, this.elice.yi-this.elice.dy);
    ctx.stroke();
    ctx.closePath();


    ctx.font = '20px Times New Roman';
    ctx.fillStyle = 'rgba(255,255,255,1)';

    ctx.fillText(this.nombre, this.x-10, this.y+5);

  },

  girar:function(elem){

    ctx.save();

    if (this.elice.girar===true){
      if (this.elice.alfa<360){
        this.elice.alfa=this.elice.alfa+this.velocidad/10
      }else{
        this.elice.alfa=0;
      }
      let fi=this.elice.alfa*Math.PI/180;
      this.elice.dx=30*Math.cos(fi);
      this.elice.dy=30*Math.sin(fi);
      ctx.beginPath();
      ctx.moveTo(this.elice.xi,this.elice.yi);
      ctx.lineTo(this.elice.xi+this.elice.dx,this.elice.yi+this.elice.dy);
      ctx.lineTo(this.elice.xi-this.elice.dx,this.elice.yi-this.elice.dy);
      ctx.stroke();
      ctx.restore();
      this.graficar();
      window.requestAnimationFrame(this.girar.bind(this));
    }
  },

  setOn:function(f){
    f.estado='rgba(0,255,0,1)';
    f.elice.girar=true;
  },
  setOff:function(f){
    f.estado='rgba(200,200,200,1)';
    f.elice.girar=false;
  },
  setDefault:function(f){
    f.estado='rgba(255,128,64,1)';
    f.velocidad=0;
  },
  setFalla:function(f){
    f.estado='rgba(255,0,0,1)';
    f.velocidad=0;
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
  getVelocidad:function(){
    return this.velocidad;
  },

};
