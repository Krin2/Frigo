﻿var ModuloReja= function(nombre,x,y, direccion,canvas){
  this.nombre=nombre;
  this.arrancarId="b-arrancar-"+this.nombre;
  this.detenerId="b-detener-"+this.nombre;
  this.x=x;
  this.y=y;
  this.alfa=0;
  this.apertura=0
  this.giro=false;
  this.estado='rgba(200,200,200,1)';
  this.direccion=direccion;
  this.canvas=canvas;
  this.ctx = this.canvas.getContext('2d');
};

ModuloReja.prototype={
  iniciar:function(){
    // // this.bArrancar= document.getElementById(this.arrancarId);
    // // this.bDetener= document.getElementById(this.detenerId);
    // this.bApertura = document.getElementById("ang-"+this.nombre);

    // // this.bArrancar.style.color='rgba(118,118,118,1)';
    // // this.bArrancar.style.background='rgba(239,239,239,1)';
    // // this.bDetener.style.color='rgba(0,200,50,1)';
    // // this.bDetener.style.background='rgba(102,142,153,1)';

    // // this.bArrancar.onclick=this.arrancar.bind(this);
    // // this.bDetener.onclick=this.detener.bind(this);
    // this.bApertura.onchange=this.cambiarApertura.bind(this);

    // this.setApertura(parseFloat(this.bApertura.value));
    this.graficar();

    this.ctx.font = '20px Times New Roman';
    this.ctx.fillStyle = 'rgba(255,255,255,1)';

    if (this.direccion==="vertical"){
      this.ctx.fillText(this.nombre, this.x+2, this.y+30);
    }else{
      this.ctx.fillText(this.nombre, this.x-2, this.y+30);
    }
  },

  arrancar:function(e){
    this.setEstado('on');
    this.graficar();
    this.bArrancar.style.color='rgba(0,200,50,1)';
    this.bArrancar.style.background='rgba(0,250,50,1)';
    this.bDetener.style.color='rgba(118,118,118,1)';
    this.bDetener.style.background='rgba(239,239,239,1)';
    // window.requestAnimationFrame(this.girar.bind(this));
  },
  detener:function(e){
    this.setEstado('off');
    this.graficar();
    this.bArrancar.style.color='rgba(118,118,118,1)';
    this.bArrancar.style.background='rgba(239,239,239,1)';
    this.bDetener.style.color='rgba(0,200,50,1)';
    this.bDetener.style.background='rgba(102,142,153,1)';
    // window.cancelAnimationFrame(this.girar.bind(this));
  },

  cambiarApertura:function(e){
    this.setApertura(parseFloat(e.target.value));
    window.requestAnimationFrame(this.girar.bind(this));
  },

  setApertura:function(angulo){
    this.apertura=angulo;
  },


  graficar: function(){

    //canvas
    this.canvas.style.zIndex=1;
    this.ctx.globalCompositeOperation='sourse-over';

    this.ctx.fillStyle = 'rgba(200,200,200,1)';
    this.ctx.strokeStyle = 'rgba(0,0,0,1)';
    this.ctx.beginPath();
    if (this.direccion==="vertical"){
      this.ctx.fillRect(this.x,this.y,-10,40);
      this.ctx.strokeRect(this.x,this.y,-10,40);
    }else{
      this.ctx.fillRect(this.x,this.y,40,10);
      this.ctx.strokeRect(this.x,this.y,40,10);
    }
    // this.ctx.strokeStyle = this.estado;
    this.ctx.moveTo(this.x,this.y);
    this.alfa=this.apertura*9/10
    let alfa=this.alfa*Math.PI/180;
    if (this.direccion==="vertical"){
      for (var i=1;i<5;i++){
        this.ctx.lineTo(this.x-10*Math.sin(alfa),this.y+10*(i+Math.cos(alfa+Math.PI/2)));
        this.ctx.moveTo(this.x,this.y+10*i);
      }
    }else{
      for (var i=1;i<5;i++){
        this.ctx.lineTo(this.x+10*(i+Math.cos(alfa+Math.PI/2)),this.y+10*Math.sin(alfa));
        this.ctx.moveTo(this.x+10*i,this.y);
      }
    }

    this.ctx.stroke();
    this.ctx.closePath();
  },

  girar:function(elem){
    if (this.giro===true){
      if (this.alfa<=90){
        this.alfa=this.apertura*9/10;
      }else{
        this.alfa=0;
      }
    }
    this.ctx.strokeStyle = this.estado;
    this.graficar();
    window.requestAnimationFrame(this.girar.bind(this));
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
  getDireccion:function(){
    return this.direccion;
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
    f.estado='rgba(0,255,0,1)';
    f.giro=true;
  },
  setOff:function(f){
    f.estado='rgba(200,200,200,1)';
    f.giro=false;
  },
  setDefault:function(f){
    f.estado='rgba(255,128,64,1)';
    f.giro=false;
  },
  setFalla:function(f){
    f.estado='rgba(255,0,0,1)';
    f.giro=false;
  },

  setDirección:function(direccion){
    this.direccion=direccion;
  },

};