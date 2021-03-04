this.ModeloUTA=function(canvas){
  this.mUi1=new ModuloSala('UI1',200,100,150,150,canvas);
  this.mUi2=new ModuloSala('UI2',350,100,150,150,canvas);
  this.mUi3=new ModuloSala('UI3',500,100,150,150,canvas);
  this.mUi4=new ModuloSala('UI4',50,100,150,150,canvas);

  this.mUe1=new ModuloSala('UE1',50,300,100,150,canvas);
  this.mUe2=new ModuloSala('UE2',150,300,100,150,canvas);
  this.mUe3=new ModuloSala('UE3',250,300,100,150,canvas);
  this.mUe4=new ModuloSala('UE4',350,300,100,150,canvas);
  this.mUe5=new ModuloSala('UE5',450,300,100,150,canvas);
  this.mUe6=new ModuloSala('UE6',550,300,100,150,canvas);
  this.mUe7=new ModuloSala('UE7',650,300,100,150,canvas);
  
  this.mUi1F1 = new ModuloForzador('UI1F1',90,200,canvas);
  this.mUi1F2 = new ModuloForzador('UI1F2',160,200,canvas);
  this.mUi2F1 = new ModuloForzador('UI2F1',240,200,canvas);
  this.mUi2F2 = new ModuloForzador('UI2F2',310,200,canvas);
  this.mUi3F1 = new ModuloForzador('UI3F1',390,200,canvas);
  this.mUi3F2 = new ModuloForzador('UI3F2',460,200,canvas);
  this.mUi4F1 = new ModuloForzador('UI4F1',540,200,canvas);
  this.mUi4F2 = new ModuloForzador('UI4F2',610,200,canvas);

  this.mUe1F1 = new ModuloForzador('UE1F1',100,340,canvas);
  this.mUe2F1 = new ModuloForzador('UE2F1',200,340,canvas);
  this.mUe3F1 = new ModuloForzador('UE3F1',300,340,canvas);
  this.mUe4F1 = new ModuloForzador('UE4F1',400,340,canvas);
  this.mUe5F1 = new ModuloForzador('UE5F1',500,340,canvas);
  this.mUe6F1 = new ModuloForzador('UE6F1',600,340,canvas);
  this.mUe7F1 = new ModuloForzador('UE7F1',700,340,canvas);
  
  this.mRUI1= new ModuloReja('RUI1',110,90,'horizontal',canvas);
  this.mRUI2= new ModuloReja('RUI2',260,90,'horizontal',canvas);
  this.mRUI3= new ModuloReja('RUI3',410,90,'horizontal',canvas);
  this.mRUI4= new ModuloReja('RUI4',560,90,'horizontal',canvas);

  this.mRUE1= new ModuloReja('RUE1',70,290,'horizontal',canvas);
  this.mRUE2= new ModuloReja('RUE2',170,290,'horizontal',canvas);
  this.mRUE3= new ModuloReja('RUE3',270,290,'horizontal',canvas);
  this.mRUE4= new ModuloReja('RUE4',370,290,'horizontal',canvas);
  this.mRUE5= new ModuloReja('RUE5',470,290,'horizontal',canvas);
  this.mRUE6= new ModuloReja('RUE6',570,290,'horizontal',canvas);
  this.mRUE7= new ModuloReja('RUE7',670,290,'horizontal',canvas);

  this.mUi1FP=new ModuloFiltro('UI1FP',50,120,150,15,canvas);
  this.mUi2FP=new ModuloFiltro('UI2FP',200,120,150,15,canvas);
  this.mUi3FP=new ModuloFiltro('UI3FP',350,120,150,15,canvas);
  this.mUi4FP=new ModuloFiltro('UI4FP',500,120,150,15,canvas);

  this.mUe1FP=new ModuloFiltro('UE1FP',50,380,100,15,canvas);
  this.mUe2FP=new ModuloFiltro('UE2FP',150,380,100,15,canvas);
  this.mUe3FP=new ModuloFiltro('UE3FP',250,380,100,15,canvas);
  this.mUe4FP=new ModuloFiltro('UE4FP',350,380,100,15,canvas);
  this.mUe5FP=new ModuloFiltro('UE5FP',450,380,100,15,canvas);
  this.mUe6FP=new ModuloFiltro('UE6FP',550,380,100,15,canvas);
  this.mUe7FP=new ModuloFiltro('UE7FP',650,380,100,15,canvas);

  this.ui1pdf=new Instrumento('UI1PdF',170,80,'TP','Bar',canvas);
  this.ui2pdf=new Instrumento('UI1PdF',320,80,'TP','Bar',canvas);
  this.ui3pdf=new Instrumento('UI1PdF',470,80,'TP','Bar',canvas);
  this.ui4pdf=new Instrumento('UI1PdF',620,80,'TP','Bar',canvas);

  this.ue1pdf=new Instrumento('UE1PdF',140,280,'TP','Bar',canvas);
  this.ue2pdf=new Instrumento('UE2PdF',240,280,'TP','Bar',canvas);
  this.ue3pdf=new Instrumento('UE3PdF',340,280,'TP','Bar',canvas);
  this.ue4pdf=new Instrumento('UE4PdF',440,280,'TP','Bar',canvas);
  this.ue5pdf=new Instrumento('UE5PdF',540,280,'TP','Bar',canvas);
  this.ue6pdf=new Instrumento('UE6PdF',640,280,'TP','Bar',canvas);
  this.ue7pdf=new Instrumento('UE7PdF',740,280,'TP','Bar',canvas);
  this.iniciar();
};
ModeloUTA.prototype={
  iniciar:function(){
    this.mUi1.iniciar();
    this.mUi2.iniciar();
    this.mUi3.iniciar();
    this.mUi4.iniciar();
  
    this.mUe1.iniciar();
    this.mUe2.iniciar();
    this.mUe3.iniciar();
    this.mUe4.iniciar();
    this.mUe5.iniciar();
    this.mUe6.iniciar();
    this.mUe7.iniciar();
  
    this.mUi1F1.iniciar();
    this.mUi1F2.iniciar();
    this.mUi2F1.iniciar();
    this.mUi2F2.iniciar();
    this.mUi3F1.iniciar();
    this.mUi3F2.iniciar();
    this.mUi4F1.iniciar();
    this.mUi4F2.iniciar();
  
    this.mUe1F1.iniciar();
    this.mUe2F1.iniciar();
    this.mUe3F1.iniciar();
    this.mUe4F1.iniciar();
    this.mUe5F1.iniciar();
    this.mUe6F1.iniciar();
    this.mUe7F1.iniciar();
  
    this.mRUI1.iniciar();
    this.mRUI2.iniciar();
    this.mRUI3.iniciar();
    this.mRUI4.iniciar();
  
    this.mRUE1.iniciar();
    this.mRUE2.iniciar();
    this.mRUE3.iniciar();
    this.mRUE4.iniciar();
    this.mRUE5.iniciar();
    this.mRUE6.iniciar();
    this.mRUE7.iniciar();
  
    this.mUi1FP.iniciar();
    this.mUi2FP.iniciar();
    this.mUi3FP.iniciar();
    this.mUi4FP.iniciar();
  
    this.mUe1FP.iniciar();
    this.mUe2FP.iniciar();
    this.mUe3FP.iniciar();
    this.mUe4FP.iniciar();
    this.mUe5FP.iniciar();
    this.mUe6FP.iniciar();
    this.mUe7FP.iniciar();
  
    this.ui1pdf.iniciar();
    this.ui2pdf.iniciar();
    this.ui3pdf.iniciar();
    this.ui4pdf.iniciar();
  
    this.ue1pdf.iniciar();
    this.ue2pdf.iniciar();
    this.ue3pdf.iniciar();
    this.ue4pdf.iniciar();
    this.ue5pdf.iniciar();
    this.ue6pdf.iniciar();
    this.ue7pdf.iniciar();
  },
}
