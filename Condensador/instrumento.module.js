// Modelo generico instrumento

class Instrumento {
    constructor(tag,unidad) {
    this.tag=tag;
    this.medicion=0;
    this.unidad=function (){
      switch (tag[0]) {
        case "T":
          this.unidad="�C";
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
    var listaInstrumentos ={
      tag :"",
      medicion: 0,
      unidad:""
    };
  }

  agregarInstrumento = function (tag,unidad) {
    var instrumento= new Instrumento(tag,unidad)
    listaInstrumentos.push(instrumento);
  };

  actualizarMedicion = function (tag,medicion) {
    listaInstrumentos.filter((elemento)=>{
      if (elemento.tag===tag){
        elemento.medicion=medicion;
      }
    })
    

  };

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      