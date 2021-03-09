// import { setTimeout } from "timers";
const dato=require('./servidor');
var EstadosModelo = function () {
    this.titulosEstados = dato.tituloEstados;
    this.contenidoEstados=dato.contenidoEstados;
    this.nivel=dato.contenidoEstados[2];
    this.bomba1=dato.contenidoEstados[3];
    this.bomba2=dato.contenidoEstados[4];
    this.forzador1=dato.contenidoEstados[5];
    this.forzador2=dato.contenidoEstados[6];
    this.forzador3=dato.contenidoEstados[7];
    this.forzador4=dato.contenidoEstados[8];
    this.forzador5=dato.contenidoEstados[9];
    this.eventoLlenarTítulos= new Eventos(this);
    this.eventoActualizarEstados= new Eventos(this)
};

EncabezadoModelo.prototype = {
    // busca los titulos de la base de datos y los carga
    llenarTitulos: function (titulo) {
        this.titulosEstados= dato.tituloEstados;
        this.eventoLlenarTítulo.notificar(this);
    },
    // busca el contenido de los titulos de la base de datos y los actualiza
    actualizarEstados: function(){
        this.contenidoEstados=[
            actualizarServicio(dato.entradasDigitales.automatico,dato.entradasDigitales.manual),
            actualizarEstado(dato.contenidoEstados),
            actualizarNivel(dato.entradasDigitales.nivel),
            actualizarElemento(dato.entradasDigitales.arranqueFinalizadoBomba1,dato.salidasDigitales.arranqueBomba1),
            actualizarElemento(dato.entradasDigitales.arranqueFinalizadoBomba2,dato.salidasDigitales.arranqueBomba2),
            actualizarElemento(dato.entradasDigitales.arranqueFinalizadoForzador1,dato.salidasDigitales.arranqueForzador1),
            actualizarElemento(dato.entradasDigitales.arranqueFinalizadoForzador2,dato.salidasDigitales.arranqueForzador2),
            actualizarElemento(dato.entradasDigitales.arranqueFinalizadoForzador3,dato.salidasDigitales.arranqueForzador3),
            actualizarElemento(dato.entradasDigitales.arranqueFinalizadoForzador4,dato.salidasDigitales.arranqueForzador4),
            actualizarElemento(dato.entradasDigitales.arranqueFinalizadoForzador5,dato.salidasDigitales.arranqueForzador5),
        ]
        dato.contenidoEstados=this.contenidoEstados;
        this.eventoActualizarEstados.notificar(this);
    }   

}
actualizarServicio= function(automatico,manual){
    if (automatico && !manual){
        return 'AUTOMATICO';
    }else {
        if (manual && !automatico){
            return 'MANUAL';
        }else{
            return 'OFF'
        }
    }
}
actualizarNivel= function(nivel){
    switch (nivel){
        case true: {
            return 'Normal';
            break;
        }
        case false:{
            return 'Bajo';
            break;
        }
    }
}
actualizarEstado= function(contenido){
    switch (contenido[0]){
        case "OFF":{
            return "Apagado";
            break;
        }
        case "MANUAL","AUTOMATICO":{
            contenido.forEach(element => {
                if (element==="En falla"){
                    return "En marcha con falla"
                }else{
                    return "En marcha"
                }
            });
        }   
    }
}
actualizarElemento= function(ARR,AF){
    if (ARR){
        setTimeout(function(){
            if (AF){
                return  'En marcha';
            }else{
                return  'En falla';
            }
        },3000);
    }else{
        return 'Apagado';
    }
    
}