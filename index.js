$(function () {
  var modeloEncabezado = new EncabezadoModelo();
  var vistaEncabezado = new EncabezadoVista(modeloEncabezado);
  var controladorEncabezado = new EncabezadoControlador(modeloEncabezado, vistaEncabezado);
  vistaEncabezado.iniciar();
  controladorEncabezado.iniciar();
  setInterval(actualizarFecha,1000);
  setInterval(actualizarHora,1000);
  
  var vistaMenu = new MenuVista();
  vistaMenu.iniciar();

  var vistaEstados = new EstadosVista();
  vistaEstados.iniciar();

  var vistaLecturas = new LecturasVista();
  vistaLecturas.iniciar();

 });

 actualizarFecha= function(){
   var ahora=new Date();
   document.querySelector(".p-fecha").textContent=("0"+ahora.getDate()).slice(-2)+"-"+("0"+(ahora.getMonth()+1)).slice(-2)+"-"+ahora.getFullYear();

 };

 actualizarHora= function(){
   var ahora=new Date();
   document.querySelector(".p-hora").textContent= ("0"+ahora.getHours()).slice(-2)+":"+("0"+ahora.getMinutes()).slice(-2)+":"+("0"+ahora.getSeconds()).slice(-2);
 };
