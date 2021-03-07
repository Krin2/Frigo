var Instrumento=function(nombre,x,y,tipo,unidad,canvas){
  this.nombre=nombre;
  this.x=x;
  this.y=y;
  this.estado='rgba(200,200,200,1)';
  this.medicion=0;
  this.unidad=unidad;
  this.tipo=tipo
  this.rangoMin=0;
  this.rangoMax=100;
  this.canvas=canvas;
  this.ctx = this.canvas.getContext('2d');
};



Instrumento.prototype={
  iniciar: function(){

    //Creacion del instrumento
    this.$lecturas= document.getElementById("lecturas");
    this.$instrumento = document.createElement("div")
    this.$tag= document.createElement("div")
    this.$unidad= document.createElement("div")
    this.$medicion=document.createElement("div")
    //asignacion de clase
    this.$instrumento.className="instrumento";
    this.$instrumento.id=this.nombre;
    this.$tag.className="nombre-instrumento";
    this.$unidad.className="unidades";
    this.$medicion.className="medicion-instrumento";

    //Asignacion de valores
    this.$tag.textContent=this.nombre;
    this.$unidad.textContent=this.unidad;
    this.$medicion.textContent=this.medicion;

    //incorporacion de elementos al contexto
    this.$instrumento.append(this.$tag, this.$medicion, this.$unidad);
    this.$lecturas.append(this.$instrumento);

    this.formato();

    //Creacion de los comandos para simulacion
    this.elegirRango();

    this.bMedicion = document.createElement('input');
    this.bMedicion.id="medicion-"+this.nombre;
    this.bMedicion.type='range';
    this.bMedicion.max=this.rangoMax;
    this.bMedicion.min=this.rangoMin;
    this.bMedicion.step="0.1";
    this.bMedicion.value='0';

    var bDiv = document.createElement("div")
    var bLabel = document.createElement('label');
    bDiv.className='col3';
    bDiv.gridArea='col3';

    bLabel.htmlFor="medida"
    bLabel.style['margin-left']= '5px';
    bLabel.style['margin']='right:5px';
    bLabel.style['vertical-align']= 'top';
    bLabel.innerText=this.nombre+' ['+this.rangoMin+':'+this.rangoMax+']';

    $comando= document.getElementById("id-comando");
    bDiv.append(bLabel);
    bDiv.append(this.bMedicion);
    $comando.append(bDiv);

    //incorporacion de los eventos para cambiar la visualizacion de lps instrumentos
    this.bMedicion.onchange=this.cambiarMedicion.bind(this);
    this.setMedicion(parseFloat(this.bMedicion.value));

    this.graficar();
  },

  ocultar:function(){
    this.$instrumento.style.visibility='hidden';
    this.bMedicion.style.visibility='hidden';
  },
  ver:function(){
    this.$instrumento.style.visibility='visible';
    this.bMedicion.style.visibility='visible';
  },
  cambiarMedicion:function(e){
    this.setMedicion(parseFloat(e.target.value));
  },

  setMedicion:function(medicion){
    this.medicion=medicion;
    this.$medicion.innerText=this.medicion;
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
    this.canvas.style.zIndex=2;

    this.ctx.fillStyle = 'rgba(100,100,200,1)';
    this.ctx.strokeStyle = 'rgba(0,0,0,0.8)';

    this.ctx.lineWidth=1;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2,0);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.fillStyle = 'rgba(255,255,255,1)';
    this.ctx.fillRect(this.x-5, this.y-5,10,5);
    this.ctx.strokeRect(this.x-5, this.y-5,10,5);
    this.ctx.closePath();

    this.ctx.moveTo(this.x,this.y+10);
    this.ctx.lineTo(this.x,this.y+20);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.font = '10px Times New Roman';
    this.ctx.fillStyle = 'rgba(255,255,255,1)';

    this.ctx.fillText(this.nombre, this.x-10, this.y-12);
  },
  formato: function(){
      this.$instrumento.style.backgroundColor= 'rgba(100,100,100,1)';
      this.$instrumento.style['border-radius']= '3px';
      this.$instrumento.style['border-style']= 'solid';
      this.$instrumento.style['border-width']= 'thin';
      this.$instrumento.style['margin']= '3px 3px 3px 3px';
      this.$instrumento.style.color='rgba(100,200,100,1)';
      this.$instrumento.style.width= '110px';
      this.$instrumento.style.display= 'flex';
      this.$instrumento.style['justify-content']= 'space-around';
      this.$medicion.style['font-size']= '1.5em';
      this.$medicion.style['font-family']= "'Squada One', cursive";
  },
  elegirRango:function(){
    switch(this.tipo){
      case 'TT':{
        this.rangoMax=150;
        this.rangoMin=-50;
        break;
      }
      case 'TP':{
        this.rangoMax=20;
        this.rangoMin=-1;
        break;
      }
      case 'TH':{
        this.rangoMax=100;
        this.rangoMin=-0;
        break;
      }
      default:{
        this.rangoMax=100;
        this.rangoMin=-0;
        break;
      }
    }
  }
};
