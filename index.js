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


 });

 actualizarFecha= function(){
   var ahora=new Date();
   document.querySelector(".p-fecha").textContent=ahora.getDate()+"-"+(ahora.getMonth()+1)+"-"+ahora.getFullYear();

 };

 actualizarHora= function(){
   var ahora=new Date();
  document.querySelector(".p-hora").textContent= ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds();
 };
