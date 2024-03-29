import { Component , OnInit, Inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  nombre?: string;
  valorContador : number = 0;
  mensajePadre: string = "Mensaje enviado desde el padre";
  mensajeRecibido: string="";
  fecha?: Date = new Date();
  dolar?: number = 1000.5
  pi?: number = 3.1416;
  factor?: number = 0.5;

  //private _servicioFamiliar2 = Inject(ServicioFamiliarService);

  constructor(
  private _servicioFamiliar: ServicioFamiliarService
  ){}


  ngOnInit(): void{
    this._servicioFamiliar.setHermanoGrande("Juan");
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoChico());
  }


  incrementar(){
    this.valorContador++;
  }
  decrementar(){
    this.valorContador--;
  }

  recibirMensaje($event: string){
    this.mensajeRecibido = $event;
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

}
