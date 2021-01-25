$(function () {
  var mSala1=new ModuloSala('CTA',100,100,550,200);
  var mSala2=new ModuloSala('Sala Vestuarios',100,400,150,100);
  var mSala3=new ModuloSala('Sala Envasados',300,400,150,100);
  var mSala4=new ModuloSala('Sala Bobinas',500,400,150,100);
  mSala1.iniciar();
  mSala2.iniciar();
  mSala3.iniciar();
  mSala4.iniciar();

  var mTuberia1= new ModuloTuberia('T1',350,50);
  var mTuberia2= new ModuloTuberia('T2',350,320);
  var mTuberia3= new ModuloTuberia('T3',80,50);
  mTuberia1.iniciar();
  mTuberia2.iniciar();
  mTuberia3.iniciar();

  var mforzador1 = new ModuloForzador('F1',500,150);
  var mforzador2=new ModuloForzador('F2',500,250);
  var mforzador3=new ModuloForzador('F3',570,150);
  var mforzador4=new ModuloForzador('F4',570,250);
  mforzador1.iniciar();
  mforzador2.iniciar();
  mforzador3.iniciar();
  mforzador4.iniciar();

  var mReja1= new ModuloReja('R1',100,120,'vertical');
  var mReja2= new ModuloReja('R2',155,400,'horizontal');
  var mReja3= new ModuloReja('R3',555,400,'horizontal');
  mReja1.iniciar();
  mReja2.iniciar();
  mReja3.iniciar();

  var mFP=new ModuloFiltro('FP',150,100);
  var mFS=new ModuloFiltro('FS',200,100);
  var mFA=new ModuloFiltro('FA',620,100);
  mFP.iniciar();
  mFS.iniciar();
  mFA.iniciar();

  var mCircFrio=new ModuloCircuito('CR',300,80,'frio');
  var mCircCalor=new ModuloCircuito('CC',350,80,'calor');
  mCircFrio.iniciar();
  mCircCalor.iniciar();


    setInterval(actualizarFecha,1000);
    setInterval(actualizarHora,1000);

});


actualizarFecha= function(){
  var ahora=new Date();
  document.querySelector(".p-fecha").textContent=ahora.getDate()+"-"+(ahora.getMonth()+1)+"-"+ahora.getFullYear();
  formatoFecha();
};

actualizarHora= function(){
  var ahora=new Date();
 document.querySelector(".p-hora").textContent= ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds();
 formatoHora();
};
formatoFecha= function(){
  document.querySelector(".p-fecha").style.color= "rgba(0,180,180,1)";
};
formatoHora= function(){
  document.querySelector(".p-hora").style.color= "rgba(0,200,200,1)";
};
