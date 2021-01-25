
$(function () {
  //---Encabezado
  var modeloEncabezado = new EncabezadoModelo();
  var vistaEncabezado = new EncabezadoVista(modeloEncabezado);
  var controladorEncabezado = new EncabezadoControlador(modeloEncabezado, vistaEncabezado);
  vistaEncabezado.iniciar();
  controladorEncabezado.iniciar();
  setInterval(actualizarFecha,1000);
  setInterval(actualizarHora,1000);
  
  //---Menu
  var vistaMenu = new MenuVista();
  vistaMenu.iniciar();

  //---Estados
  var modeloEstados = new EstadosModelo();
  var vistaEstados = new EstadosVista(modeloEstados);
  var controladorEstados = new EstadosControlador(modeloEstados, vistaEstados);
  vistaEstados.iniciar();
  controladorEstados.iniciar();

//---Lecturas
  var vistaLecturas = new LecturasVista();
  vistaLecturas.iniciar();

  //---Comandos
  var vistaComandos = new ComandosVista();
  vistaComandos.iniciar();

  //----------------
  
 });

 actualizarFecha= function(){
   var ahora=new Date();
   document.querySelector(".p-fecha").textContent=("0"+ahora.getDate()).slice(-2)+"-"+("0"+(ahora.getMonth()+1)).slice(-2)+"-"+ahora.getFullYear();

 };

 actualizarHora= function(){
   var ahora=new Date();
   document.querySelector(".p-hora").textContent= ("0"+ahora.getHours()).slice(-2)+":"+("0"+ahora.getMinutes()).slice(-2)+":"+("0"+ahora.getSeconds()).slice(-2);
 };
