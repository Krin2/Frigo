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
    this.crearComando();
    this.graficar();
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
    this.bEstado=document.createElement('input');
    this.bEstado.type='range';
    this.bEstado.id='ape-'+this.nombre;
    this.bEstado.max='100';
    this.bEstado.min='0';
    this.bEstado.step='1';
    this.bEstado.value='0';
    this.bEstado.style.height='30px';
    this.bEstado.style.width='100px';
    this.bEstado.form='ape';
    this.bEstado.style.color='rgba(0,200,50,1)';
    this.bEstado.style.background='rgba(102,142,153,1)';
    this.bEstado.style.verticalAlign='middle';
    this.bEstado.onchange=this.cambiarEstado.bind(this);
    div.append(this.bEstado);

    menuComando.append(div);
  },

  ocultar:function(){
    this.bEstado.style.visibility='hidden';
    this.label.style.visibility='hidden';
  },
  ver:function(){
    this.bEstado.style.visibility='visible';
    this.label.style.visibility='visible';
  },
  graficar: function(){
      //canvas
    this.canvas.style.zIndex=1;
    this.ctx.globalCompositeOperation='source-over';

    this.ctx.fillStyle = this.estado;
    this.ctx.strokeStyle = 'rgba(20, 20, 20, 1)';

    switch(this.nombre){
      case 'T1':{
          //Salida CTA
        this.ctx.beginPath();
        this.ctx.moveTo(650, 180);
        this.ctx.lineTo(730, 180);
        this.ctx.lineTo(730, 370);
        this.ctx.lineTo(595, 370);
        this.ctx.lineTo(595, 400);

        this.ctx.lineTo(555, 400);
        this.ctx.lineTo(555, 370);
        this.ctx.lineTo(395, 370);
        this.ctx.lineTo(395, 400);

        this.ctx.lineTo(355, 400);
        this.ctx.lineTo(355, 370);
        this.ctx.lineTo(195, 370);
        this.ctx.lineTo(195, 400);

        this.ctx.lineTo(155, 400);
        this.ctx.lineTo(155, 330);
        this.ctx.lineTo(690, 330);
        this.ctx.lineTo(690, 220);
        this.ctx.lineTo(650, 220);
        this.ctx.lineTo(650, 180);

        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      }
      case 'T2':{
        //entrada CTA
        this.ctx.beginPath();
        this.ctx.moveTo(395, 500);
        this.ctx.lineTo(395, 580);
        this.ctx.lineTo(20, 580);
        this.ctx.lineTo(20, 240);
        this.ctx.lineTo(100, 240);
        this.ctx.lineTo(100, 280);
        this.ctx.lineTo(60, 280);
        this.ctx.lineTo(60, 540);
        this.ctx.lineTo(355, 540);
        this.ctx.lineTo(355, 500);
        this.ctx.lineTo(395, 500);

        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      }
      case 'T3':{
        //entrada de aire externo
        this.ctx.fillRect(60, 120, 30, 40);
        this.ctx.strokeRect(60, 120, 30, 40);
        this.ctx.closePath();
        break;
      }
      case 'T4':{
        //entrada de aire externo
        this.ctx.fillRect(400, 180, 100, 40);
        this.ctx.strokeRect(400, 180, 100, 40);
        this.ctx.closePath();
        break;
      }
    }
  },

  cambiarEstado:function(e){
    this.setEstado(parseFloat(e.target.value));
    // window.requestAnimationFrame(this.cambio.bind(this));
  },

  setEstado:function(estado){
    let x=estado/100;
    this.estado='rgba('+Math.round(200-70*x)+','+Math.round(200+x*37)+','+Math.round(200+31+x)+','+x+')';
    this.graficar();
  },

  cambio:function(e){
    this.ctx.strokeStyle = this.estado;
    this.graficar();
    // window.requestAnimationFrame(this.cambio.bind(this));
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
