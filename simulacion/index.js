$(function () {

  setInterval(actualizarFecha,1000);
  setInterval(actualizarHora,1000);

 });

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

 crearCTA300 =function(){
   //marca el boton
   document.querySelector('.boton1').value=true;
   document.querySelector('.boton2').value=false;
   document.querySelector('.boton3').value=false;
   document.querySelector('.boton4').value=false;
   borrar();
   var canvas=document.getElementById('canvas1');
   if (this.moduloCta300!==null){
     this.moduloCta300=new this.ModeloCTA300(canvas);
   }else {
     this.moduloCta300.iniciar();
   }
   canvas.style.visibility='visible';
 }
 crearCTA100 =function(){
   document.querySelector('.boton1').value=false;
   document.querySelector('.boton2').value=true;
   document.querySelector('.boton3').value=false;
   document.querySelector('.boton4').value=false
   borrar();
   var canvas=document.getElementById('canvas2');
   if (this.moduloCta100!==null){
     this.moduloCta100=new this.ModeloCTA100(canvas);
   }else {
     this.moduloCta100.iniciar();
   }
   canvas.style.visibility='visible';
 }
 crearUTA =function(){
   document.querySelector('.boton1').value=false;
   document.querySelector('.boton2').value=false;
   document.querySelector('.boton3').value=true;
   document.querySelector('.boton4').value=false;
   borrar();
   var canvas=document.getElementById('canvas3');
   if (this.moduloUta!==null){
     this.moduloUta=new this.ModeloUTA(canvas);

   }else {
     this.moduloUta.iniciar();
   }
   canvas.style.visibility='visible';
 }
 crearSimulacion =function(){
   document.querySelector('.boton1').value=false;
   document.querySelector('.boton2').value=false;
   document.querySelector('.boton3').value=false;
   document.querySelector('.boton4').value=true;
 }

borrar=function(){
  var canvas=document.getElementById('canvas1');
  canvas.style.visibility='none';
  var canvas=document.getElementById('canvas2');
  canvas.style.visibility='none';
  var canvas=document.getElementById('canvas3');
  canvas.style.visibility='none';
  
  // var canvas=document.getElementById('canvas1');
  // var ctx=canvas.getContext("2d");
  // ctx.fillStyle = 'rgba(25,25,25,1)';
  // ctx.fillRect(0, 0, 800, 600);
}
