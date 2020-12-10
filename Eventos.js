var Eventos = function (informador) {
    this._informador = informador;  //indica quien es el que se suscribe para enviar informacion
    this._oyentes = [];             //indica quienes son los oyentesque recibiran la información enviada por el suscriptor
}

Eventos.prototype = {
    // agrega un nuevo oyente a la lista de oyentes
    adjuntar: function (oyente) {
        this._oyentes.push(oyente);
    },

    quitar: function(oyete){
      let a=this._oyentes.lastIndexOf(oyente,0);
      this._oyetes.slice(a,a+1);
    },

    notificar: function (args) {
        for (var i = 0; i < this._oyentes.length; i += 1) {
            this._oyentes[i](this._informador, args);
        }
    }
    
};
