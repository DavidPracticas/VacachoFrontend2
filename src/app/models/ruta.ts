export class Ruta{
  _id?:number;
  destino: String;
  camion: String;
  salida: String;
  boletos: String;

  constructor(destino: String, camion: String, salida: String, boletos: String){
    this.destino= destino;
    this.camion= camion;
    this.salida= salida;
    this.boletos= boletos;
  }
}
