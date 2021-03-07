var ModuloForzador= function(nombre,x,y,canvas){
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
  this.canvas=canvas;
  this.ctx = this.canvas.getContext('2d');
};
  
ModuloForzador.prototype={
  iniciar: function(){
    this.crearComando();

    this.setVelocidad(parseFloat(this.bVelocidad.value));
    this.graficar();
  },

  crearComando: function(){
    var menuComando= document.querySelector('#id-comando');
    var div=document.createElement('div');
    div.className='col1';
    div.gridArea='col1';

    //Texto
    this.label=document.createElement('label');
    this.label.for='velocidad';
    this.label.style.marginLeft='5px';
    this.label.style.marginRight='5px';
    this.label.style.verticalAlign='top';
    this.label.textContent=this.nombre;
    this.label.style.color='rgba(50,0,255,1)';
    this.label.style.verticalAlign='middle';
    div.append(this.label);

    //boton de arranque
    this.bArrancar=document.createElement('button');
    this.bArrancar.id=this.arrancarId;
    this.bArrancar.name='arrancar';
    this.bArrancar.textContent=' ↑ ';
    this.bArrancar.style.height='30px';
    this.bArrancar.style.width='30px';
    this.bArrancar.style.color='rgba(118,118,118,1)';
    this.bArrancar.style.background='rgba(239,239,239,1)';
    this.bArrancar.style.verticalAlign='middle';
    this.bArrancar.onclick=this.arrancar.bind(this);
    div.append(this.bArrancar);

    //Boton de parada
    this.bDetener=document.createElement('button');
    this.bDetener.id=this.detenerId;
    this.bDetener.name='detener';
    this.bDetener.textContent=' ↓ ';
    this.bDetener.style.height='30px';
    this.bDetener.style.width='30px';
    this.bDetener.style.color='rgba(0,200,50,1)';
    this.bDetener.style.background='rgba(102,142,153,1)';
    this.bDetener.style.verticalAlign='middle';
    this.bDetener.onclick=this.detener.bind(this);
    div.append(this.bDetener);

    //Barra de cambio de velocidad
    this.bVelocidad=document.createElement('input');
    this.bVelocidad.type='range';
    this.bVelocidad.id='vel-'+this.nombre;
    this.bVelocidad.max='100';
    this.bVelocidad.min='1';
    this.bVelocidad.step='1';
    this.bVelocidad.value='11';
    this.bVelocidad.style.height='30px';
    this.bVelocidad.style.width='100px';
    this.bVelocidad.form='vel';
    this.bVelocidad.style.color='rgba(0,200,50,1)';
    this.bVelocidad.style.background='rgba(102,142,153,1)';
    this.bVelocidad.style.verticalAlign='middle';
    this.bVelocidad.onchange=this.cambiarVelocidad.bind(this);
    div.append(this.bVelocidad);

    menuComando.append(div);
  },
  arrancar:function(e){
    this.setEstado('on');
    this.graficar();
    this.bArrancar.style.color='rgba(0,200,50,1)';
    this.bArrancar.style.background='rgba(0,250,50,1)';
    this.bDetener.style.color='rgba(118,118,118,1)';
    this.bDetener.style.background='rgba(239,239,239,1)';
    this.bDetener.style.acc='rgba(239,239,239,1)';
    
    this.bArrancar.disabled=true;
    this.bDetener.disabled=false;
    
    window.requestAnimationFrame(this.girar.bind(this));
  },
  detener:function(e){
    this.setEstado('off');
    this.graficar();
    this.bArrancar.style.color='rgba(118,118,118,1)';
    this.bArrancar.style.background='rgba(239,239,239,1)';
    this.bDetener.style.color='rgba(0,200,50,1)';
    this.bDetener.style.background='rgba(102,142,153,1)';

    this.bArrancar.disabled=false;
    this.bDetener.disabled=true;

    window.cancelAnimationFrame(this.girar.bind(this));
  },
  ocultar:function(){
    this.bArrancar.style.visibility='hidden';
    this.bDetener.style.visibility='hidden';
    this.bVelocidad.style.visibility='hidden';
    this.label.style.visibility='hidden';
  },
  ver:function(){
    this.bArrancar.style.visibility='visible';
    this.bDetener.style.visibility='visible';
    this.bVelocidad.style.visibility='visible';
    this.label.style.visibility='visible';
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
    this.ctx.globalCompositeOperation='source-over';
    this.canvas.style.zIndex=1;

    this.ctx.fillStyle = this.estado;
    this.ctx.strokeStyle = 'rgba(0,0,0,0.8)';
    this.ctx.lineWidth=1;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 30, 0, Math.PI * 2,0);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.fillStyle = 'black';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 2, 0, Math.PI * 2,0);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.beginPath();

    this.ctx.moveTo(this.elice.xi, this.elice.yi);
    this.ctx.lineTo(this.elice.xi+this.elice.dx, this.elice.yi+this.elice.dy);
    this.ctx.lineTo(this.elice.xi-this.elice.dx, this.elice.yi-this.elice.dy);
    this.ctx.stroke();
    this.ctx.closePath();


    this.ctx.font = '20px Times New Roman';
    this.ctx.fillStyle = 'rgba(255,255,255,1)';

    this.ctx.fillText(this.nombre, this.x-10, this.y+5);

  },

  girar:function(elem){

    this.ctx.save();

    if (this.elice.girar===true){
      if (this.elice.alfa<360){
        this.elice.alfa=this.elice.alfa+this.velocidad/10
      }else{
        this.elice.alfa=0;
      }
      let fi=this.elice.alfa*Math.PI/180;
      this.elice.dx=30*Math.cos(fi);
      this.elice.dy=30*Math.sin(fi);
      this.ctx.beginPath();
      this.ctx.moveTo(this.elice.xi,this.elice.yi);
      this.ctx.lineTo(this.elice.xi+this.elice.dx,this.elice.yi+this.elice.dy);
      this.ctx.lineTo(this.elice.xi-this.elice.dx,this.elice.yi-this.elice.dy);
      this.ctx.stroke();
      this.ctx.restore();
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
