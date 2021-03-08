var ModuloFiltro= function(nombre,x,y,ancho,alto,canvas){
  this.nombre=nombre;
  this.arrancarId="b-arrancar-"+this.nombre;
  this.detenerId="b-detener-"+this.nombre;
  this.x=x;
  this.y=y;
  this.ancho=ancho;
  this.alto=alto;
  this.estado='rgba(200,200,200,1)';
  this.tapado=0;
  this.encendido=false;
  this.canvas=canvas;
  this.ctx = this.canvas.getContext('2d');
};



ModuloFiltro.prototype={
  iniciar:function(){
    this.crearComando();
    this.graficar();
  },
  crearComando: function(){
    var menuComando= document.querySelector('#id-comando');
    this.div=document.createElement('div');
    this.div.className='col1';
    this.div.gridArea='col1';

    //Texto
    this.label=document.createElement('label');
    this.label.for='tapado';
    this.label.style.marginLeft='5px';
    this.label.style.marginRight='5px';
    this.label.style.verticalAlign='top';
    this.label.textContent=this.nombre;
    this.label.style.color='rgba(50,0,255,1)';
    this.label.style.verticalAlign='middle';
    this.div.append(this.label);

    //Barra de filtro tapado
    this.bTapado=document.createElement('input');
    this.bTapado.type='range';
    this.bTapado.id='ape-'+this.nombre;
    this.bTapado.max='100';
    this.bTapado.min='0';
    this.bTapado.step='1';
    this.bTapado.value='0';
    this.bTapado.style.height='30px';
    this.bTapado.style.width='100px';
    this.bTapado.form='ape';
    this.bTapado.style.color='rgba(0,200,50,1)';
    this.bTapado.style.background='rgba(102,142,153,1)';
    this.bTapado.style.verticalAlign='middle';
    this.bTapado.onchange=this.cambio.bind(this);
    this.div.append(this.bTapado);

    menuComando.append(this.div);
  },

  ocultar:function(){
    this.bTapado.style.display='none';
    this.div.style.display='none';
    this.label.style.display='none';
  },
  ver:function(){
    this.bTapado.style.display='inline-block';
    this.div.style.display='block';
    this.label.style.display='inline';
  },
  graficar: function(){
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

  cambio:function(e){
    this.setTapado(parseFloat(e.target.value));
    this.setEstado();
    this.ctx.strokeStyle = this.estado;
    this.graficar();
  },
  
  setTapado:function(tapado){
    this.tapado=tapado;
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
    let x=this.tapado/100;
    this.estado='rgba('+Math.round(200+55*x)+','+Math.round(200-x*72)+','+Math.round(200-175+x)+',1)';
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
