var ModuloReja= function(nombre,x,y, direccion,canvas){
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
    
    this.crearComando();
    this.graficar();

    this.ctx.font = '20px Times New Roman';
    this.ctx.fillStyle = 'rgba(255,255,255,1)';

    if (this.direccion==="vertical"){
      this.ctx.fillText(this.nombre, this.x+2, this.y+30);
    }else{
      this.ctx.fillText(this.nombre, this.x-2, this.y+30);
    }
  },

  crearComando: function(){
    var menuComando= document.querySelector('#id-comando');
    var div=document.createElement('div');
    div.className='col2';
    div.gridArea='col2';

    //Texto
    this.label=document.createElement('label');
    this.label.for='apertura';
    this.label.style.marginLeft='5px';
    this.label.style.marginRight='5px';
    this.label.style.verticalAlign='top';
    this.label.textContent=this.nombre;
    this.label.style.color='rgba(50,0,255,1)';
    this.label.style.verticalAlign='middle';
    div.append(this.label);

    //Barra de abrir
    this.bApertura=document.createElement('input');
    this.bApertura.type='range';
    this.bApertura.id='ape-'+this.nombre;
    this.bApertura.max='100';
    this.bApertura.min='0';
    this.bApertura.step='1';
    this.bApertura.value='0';
    this.bApertura.style.height='30px';
    this.bApertura.style.width='100px';
    this.bApertura.form='ape';
    this.bApertura.style.color='rgba(0,200,50,1)';
    this.bApertura.style.background='rgba(102,142,153,1)';
    this.bApertura.style.verticalAlign='middle';
    this.bApertura.onchange=this.cambiarApertura.bind(this);
    div.append(this.bApertura);

    menuComando.append(div);
  },

  ocultar:function(){
    this.bApertura.style.visibility='hidden';
    this.label.style.visibility='hidden';
  },
  ver:function(){
    this.bApertura.style.visibility='visible';
    this.label.style.visibility='visible';
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

  setDirección:function(direccion){
    this.direccion=direccion;
  },

};
