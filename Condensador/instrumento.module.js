// Modelo generico instrumento

class Instrumento {
    constructor(tag) {
    this.tag=tag;
    this.medicion=0;
    this.unidad=function (){
      switch (tag[0]) {
        case "T":
          this.unidad="°C";
          break;
        case "P":
          this.unidad="bar";
          break;
        case "H":
          this.unidad="%";
          break;
        case "L":
          this.unidad="%";
          break;
        default:
          this.unidad="%";
      }
    }
  }
}

Instrumento.prototype.agregarInstrumento = function (this) {
    listaInstrumentos.tag=this.tag;
    listaInstrumentos.medicion=this.medicion;
    listaInstrumentos.unidad.this.unidad;
  };

  Instrumento.prototype.actualizarMedicion = function (tag,medicion) {
    listaInstrumentos.filter((elemento)=>{
      if (elemento.tag===tag){
        elemento.medicion=medicion;
      }
    })
    

  };


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      