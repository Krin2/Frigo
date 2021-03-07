this.ModeloCTA300=function(canvas){
  this.mSala1=new ModuloSala('CTA',100,100,550,200,canvas);
  this.mSala2=new ModuloSala('Sala Vestuarios',100,400,150,100,canvas);
  this.mSala3=new ModuloSala('Sala Envasados',300,400,150,100,canvas);
  this.mSala4=new ModuloSala('Sala Bobinas',500,400,150,100,canvas);

  this.mTuberia1= new ModuloTuberia('T1',350,50,canvas);
  this.mTuberia2= new ModuloTuberia('T2',350,320,canvas);
  this.mTuberia3= new ModuloTuberia('T3',80,50,canvas);

  this.mforzador1 = new ModuloForzador('F1',500,150,canvas);
  this.mforzador2=new ModuloForzador('F2',500,250,canvas);
  this.mforzador3=new ModuloForzador('F3',570,150,canvas);
  this.mforzador4=new ModuloForzador('F4',570,250,canvas);

  this.mReja1= new ModuloReja('R1',100,120,'vertical',canvas);
  this.mReja2= new ModuloReja('R2',155,400,'horizontal',canvas);
  this.mReja3= new ModuloReja('R3',555,400,'horizontal',canvas);

  this.mFP=new ModuloFiltro('FP',150,100,25,200,canvas);
  this.mFS=new ModuloFiltro('FS',200,100,25,200,canvas);
  this.mFA=new ModuloFiltro('FA',620,100,25,200,canvas);

  this.mCircFrio=new ModuloCircuito('CR',300,80,'frio',canvas);
  this.mCircCalor=new ModuloCircuito('CC',350,80,'calor',canvas);

  this.tae=new Instrumento('TAE',110,80,'TT','°C',canvas);
  this.pdfp=new Instrumento('PdFP',162,80,'TP','Bar',canvas);
  this.pdfs=new Instrumento('PdFS',212,80,'TP','Bar',canvas);
  this.pdfa=new Instrumento('PdFA',632,80,'TP','Bar',canvas);

  this.pas=new Instrumento('PAS',660,160,'TP','Bar',canvas);
  this.tas=new Instrumento('TAS',690,160,'TT','°C',canvas);
  this.has=new Instrumento('HAS',720,160,'TH','%',canvas);

  this.pdsv=new Instrumento('PdSV',150,480,'TP','Bar',canvas);
  this.tasv=new Instrumento('TASV',180,480,'TT','°C',canvas);
  this.hasv=new Instrumento('HASV',210,480,'TH','%',canvas);

  this.pdse=new Instrumento('PdSE',350,480,'TP','Bar',canvas);
  this.tase=new Instrumento('TASE',380,480,'TT','°C',canvas);
  this.hase=new Instrumento('HASE',410,480,'TH','%',canvas);
  
  this.pdsb=new Instrumento('PdSB',550,480,'TP','Bar',canvas);
  this.tasb=new Instrumento('TASB',580,480,'TT','°C',canvas);
  this.hasb=new Instrumento('HASB',610,480,'TH','%',canvas);
  this.iniciar();
};

ModeloCTA300.prototype={
  iniciar:function(){
    this.mSala1.iniciar();
    this.mSala2.iniciar();
    this.mSala3.iniciar();
    this.mSala4.iniciar();
  
    this.mTuberia1.iniciar();
    this.mTuberia2.iniciar();
    this.mTuberia3.iniciar();
  
    this.mforzador1.iniciar();
    this.mforzador2.iniciar();
    this.mforzador3.iniciar();
    this.mforzador4.iniciar();
  
    this.mReja1.iniciar();
    this.mReja2.iniciar();
    this.mReja3.iniciar();
  
    this.mFP.iniciar();
    this.mFS.iniciar();
    this.mFA.iniciar();
  
    this.mCircFrio.iniciar();
    this.mCircCalor.iniciar();
  
    this.tae.iniciar();
    this.pdfp.iniciar();
    this.pdfs.iniciar();
    this.pdfa.iniciar();
  
    this.pas.iniciar();
    this.tas.iniciar();
    this.has.iniciar();
  
    this.pdsv.iniciar();
    this.tasv.iniciar();
    this.hasv.iniciar();
  
    this.pdse.iniciar();
    this.hase.iniciar();
    this.tase.iniciar();
  
    this.pdsb.iniciar();
    this.hasb.iniciar();
    this.tasb.iniciar();
  },
  ocultar:function(){
    this.mTuberia1.ocultar();
    this.mTuberia2.ocultar();
    this.mTuberia3.ocultar();
  
    this.mforzador1.ocultar();
    this.mforzador2.ocultar();
    this.mforzador3.ocultar();
    this.mforzador4.ocultar();
  
    this.mReja1.ocultar();
    this.mReja2.ocultar();
    this.mReja3.ocultar();
  
    this.mFP.ocultar();
    this.mFS.ocultar();
    this.mFA.ocultar();
  
    this.mCircFrio.ocultar();
    this.mCircCalor.ocultar();
  
    this.tae.ocultar();
    this.pdfp.ocultar();
    this.pdfs.ocultar();
    this.pdfa.ocultar();
  
    this.pas.ocultar();
    this.tas.ocultar();
    this.has.ocultar();
  
    this.pdsv.ocultar();
    this.tasv.ocultar();
    this.hasv.ocultar();
  
    this.pdse.ocultar();
    this.hase.ocultar();
    this.tase.ocultar();
  
    this.pdsb.ocultar();
    this.hasb.ocultar();
    this.tasb.ocultar();
  },
  ver:function(){
    this.mTuberia1.ver();
    this.mTuberia2.ver();
    this.mTuberia3.ver();
  
    this.mforzador1.ver();
    this.mforzador2.ver();
    this.mforzador3.ver();
    this.mforzador4.ver();
  
    this.mReja1.ver();
    this.mReja2.ver();
    this.mReja3.ver();
  
    this.mFP.ver();
    this.mFS.ver();
    this.mFA.ver();
  
    this.mCircFrio.ver();
    this.mCircCalor.ver();
  
    this.tae.ver();
    this.pdfp.ver();
    this.pdfs.ver();
    this.pdfa.ver();
  
    this.pas.ver();
    this.tas.ver();
    this.has.ver();
  
    this.pdsv.ver();
    this.tasv.ver();
    this.hasv.ver();
  
    this.pdse.ver();
    this.hase.ver();
    this.tase.ver();
  
    this.pdsb.ver();
    this.hasb.ver();
    this.tasb.ver();
  },
}
