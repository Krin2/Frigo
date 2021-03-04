this.ModeloCTA100=function(canvas){
  this.mSala1=new ModuloSala('CTA 100',100,100,300,200,canvas);
  this.mSala2=new ModuloSala('Sala Esterilizado',500,150,100,100,canvas);

  this.mTuberia4= new ModuloTuberia('T4',400,180,canvas);

  this.mforzador1 = new ModuloForzador('F1',300,200,canvas);

  this.mReja1= new ModuloReja('R1',100,130,'vertical',canvas);

  this.mFP=new ModuloFiltro('FP',150,100,25,200,canvas);
  this.mFS=new ModuloFiltro('FS',200,100,25,200,canvas);

  this.mCircFrio=new ModuloCircuito('CR',250,80,'frio',canvas);

  this.tae=new Instrumento('TAE',110,80,'TT','°C',canvas);
  this.pdfp=new Instrumento('PdFP',162,80,'TP','Bar',canvas);
  this.pdfs=new Instrumento('PdFS',212,80,'TP','Bar',canvas);

  this.pas=new Instrumento('PAS',330,80,'TP','Bar',canvas);
  this.tas=new Instrumento('TAS',360,80,'TT','°C',canvas);
  this.has=new Instrumento('HAS',390,80,'TH','%',canvas);

  this.pdst=new Instrumento('PdST',550,130,'TP','Bar',canvas);
  this.tast=new Instrumento('TAST',580,130,'TT','°C',canvas);
  this.hast=new Instrumento('HAST',510,130,'TH','%',canvas);
  this.iniciar();
};

ModeloCTA100.prototype={
  iniciar: function(){
    this.mSala1.iniciar();
    this.mSala2.iniciar();
  
    this.mTuberia4.iniciar();
  
    this.mforzador1.iniciar();
  
    this.mReja1.iniciar();
  
    this.mFP.iniciar();
    this.mFS.iniciar();
  
    this.mCircFrio.iniciar();
  
    this.tae.iniciar();
    this.pdfp.iniciar();
    this.pdfs.iniciar();
  
    this.pas.iniciar();
    this.tas.iniciar();
    this.has.iniciar();
  
    this.pdst.iniciar();
    this.hast.iniciar();
    this.tast.iniciar();
  },
}

