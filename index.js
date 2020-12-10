$(function () {
  var modeloEncabezado = new EncabezadoModelo();
  var vistaEncabezado = new EncabezadoVista(modeloEncabezado);
  var controladorEncabezado = new EncabezadoControlador(modeloEncabezado, vistaEncabezado);
  vistaEncabezado.iniciar();
  controladorEncabezado.iniciar();
  
  setInterval(actualizarFecha, 1000);
  setInterval(actualizarHora, 1000);
 });

 actualizarFecha= function(){
  document.querySelector('.p-fecha').textContent= getFecha();
};

actualizarHora= function(){
  document.querySelector('.p-hora').textContent= getHora();
};

getFecha= function(){
  let ahora=new Date();
  return (ahora.getDate()+"-"+(ahora.getMonth()+1)+"-"+ahora.getFullYear());
};

getHora= function(){
let ahora=new Date();
return (ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds());
};