var EncabezadoModelo = function (titulo) {
     this.titulo = titulo;
     this.eventoCambiarTitulo= new Eventos(this);
     this.eventoActualizarFecha=new Eventos(this);
     this.eventoActualizarHora=new Eventos(this);

 };

 EncabezadoModelo.prototype = {

     cambiarTitulo: function (titulo) {
         this.titulo= titulo;
         this.eventoCambiarTitulo.notificar(this);
     },

     actualizarFecha: function(){
       this.eventoActualizarFecha.notificar(this);
     },

     getTitulo: function(){
       return this.titulo;
     },

     getFecha: function(){
        let ahora=new Date();
        return (ahora.getDate()+"-"+(ahora.getMonth()+1)+"-"+ahora.getFullYear());
     },

     getHora: function(){
      let ahora=new Date();
      return (ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds());
   }

    
   }
