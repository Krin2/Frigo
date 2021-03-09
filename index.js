$(function () {
  // Creacion e inicio de un temporizador para mostrar fecha y hora
  setInterval(actualizarFecha,1000);
  setInterval(actualizarHora,1000);
 });

 // Actualizacion de la fecha y la hora en la pantalla
 actualizarFecha= function(){
   var ahora=new Date();
   document.querySelector(".p-fecha").textContent=('0'+ahora.getDate()).slice(-2)+"-"+('0'+(ahora.getMonth()+1)).slice(-2)+"-"+ahora.getFullYear();
   formatoFecha();
 };
 actualizarHora= function(){
   var ahora=new Date();
  document.querySelector(".p-hora").textContent= ('0'+ahora.getHours()).slice(-2)+":"+('0'+ahora.getMinutes()).slice(-2)+":"+('0'+ahora.getSeconds()).slice(-2);
  formatoHora();
 };
 formatoFecha= function(){
   document.querySelector(".p-fecha").style.color= "rgba(37,228,208,1)";
 };
 formatoHora= function(){
   document.querySelector(".p-hora").style.color= "rgba(37,228,208,1)";
 };

 // Seleccion de la opcion CTA 100
 crearCTA300 =function(){
   //marca el boton
   document.querySelector('.boton1').value=true;
   document.querySelector('.boton2').value=false;
   document.querySelector('.boton3').value=false;
   document.querySelector('.boton4').value=false;
   borrar();
   document.querySelector('.p-titulo').textContent="CTA 300";
   var canvas=document.getElementById('canvas1');
   if (this.moduloCta300==undefined){
     this.moduloCta300=new this.ModeloCTA300(canvas);
   }else {
     this.moduloCta300.ver();
   }

   canvas.style.height='600px';
   canvas.style.visibility='visible';
 }

 // Seleccion de la opcion CTA 100
 crearCTA100 =function(){
   document.querySelector('.boton1').value=false;
   document.querySelector('.boton2').value=true;
   document.querySelector('.boton3').value=false;
   document.querySelector('.boton4').value=false
   document.querySelector('.p-titulo').textContent="CTA 100";
   borrar();
   var canvas=document.getElementById('canvas2');
   if (this.moduloCta100==undefined){
     this.moduloCta100=new this.ModeloCTA100(canvas);
   }else {
     this.moduloCta100.ver();
   }
   
   canvas.style.height='350px';
   canvas.style.visibility='visible';
 }

 // Seleccion de la opcion UTA
 crearUTA =function(){
   document.querySelector('.boton1').value=false;
   document.querySelector('.boton2').value=false;
   document.querySelector('.boton3').value=true;
   document.querySelector('.boton4').value=false;
   document.querySelector('.p-titulo').textContent="UTA";
   borrar();
   var canvas=document.getElementById('canvas3');
   if (this.moduloUta==undefined){
     this.moduloUta=new this.ModeloUTA(canvas);
   }else {
     this.moduloUta.ver();
   }

   canvas.style.height='500px';
   canvas.style.visibility='visible';
 }

 // Rutina destinada a crear las simulaciones de las instalaciones previas
 crearSimulacion =function(){
   document.querySelector('.boton1').value=false;
   document.querySelector('.boton2').value=false;
   document.querySelector('.boton3').value=false;
   document.querySelector('.boton4').value=true;
   document.querySelector('.p-titulo').textContent="Simulación";
   borrar();
 }

 // Limpia la pantalla manteniendo los controles ocultos para no perder la información
borrar=function(){
  var canvas=document.getElementById('canvas1');
  canvas.style.visibility='hidden';
  canvas.style.height='0px';
  var canvas=document.getElementById('canvas2');
  canvas.style.visibility='hidden';
  canvas.style.height='0px';
  var canvas=document.getElementById('canvas3');
  canvas.style.visibility='hidden';
  canvas.style.height='0px';

  if(this.moduloCta300!==undefined){
    this.moduloCta300.ocultar();
   }
   if(this.moduloCta100!==undefined){
    this.moduloCta100.ocultar();
   }
   if(this.moduloUta!==undefined){
    this.moduloUta.ocultar();
   }
}
