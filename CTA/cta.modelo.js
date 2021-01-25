var ModeloCTA=function(){
  this.forzador1=new ModuloForzador('F1',500,150);
  this.forzador2=new ModuloForzador('F2',500,250);
  this.forzador3=new ModuloForzador('F3',570,150);
  this.forzador4=new ModuloForzador('F4',570,250);

  this.filtroPrimario=new ModuloFiltro('FP',150,100);
  this.filtroSecundario=new ModuloFiltro('FS',200,100);
  this.filtroAbsoluto=new ModuloFiltro('FA',620,100);

  this.rejaAireEntrada= new ModuloReja('RMAE',100,120,'vertical');
  this.rejaSalaVestuarios= new ModuloReja('RMSV',155,400,'horizontal');
  this.rejaSalaBobinas= new ModuloReja('RMSB',555,400,'horizontal');

  this.circuitoFrio=new ModuloCircuito('CR',300,80,'frio');
  this.circuitoCalor=new ModuloCircuito('CC',350,80,'calor');

  this.tuberiaSalidaCTA= new ModuloTuberia('tscta',350,50);
  this.tuberiaEntradaCTA= new ModuloTuberia('tecta',350,320);
  this.tuberiaEntradaAireExterno= new ModuloTuberia('teae',80,50);

  this.salaCTA=new ModuloSala('CTA',100,100,550,200);
  this.salaVestuarios=new ModuloSala('Sala Vestuarios',100,400,150,100);
  this.salaEnvasados=new ModuloSala('Sala Envasados',300,400,150,100);
  this.salaBobinas=new ModuloSala('Sala Bobinas',500,400,150,100);

  // this.modelo.arrancar
};
