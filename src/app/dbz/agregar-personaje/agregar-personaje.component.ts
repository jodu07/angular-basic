import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {


@Input() nuevo: Personaje = {
  nombre: '',
  poder: 0
}

constructor(private _dbzServicio: DbzService){}

// @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

agregar(){
  if(this.nuevo.nombre.trim().length === 0)
  {return;}


  this._dbzServicio.agregarPersonaje(this.nuevo);


  //this.onNuevoPersonaje.emit(this.nuevo);
    
    this.nuevo = {
      nombre:'',
      poder: 0
    }

}

}










/*
// Output sirve para emitir eventos
@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

agregar(){
  if(this.nuevo.nombre.trim().length === 0)
  {return;}


  this.onNuevoPersonaje.emit(this.nuevo);
    
    this.nuevo = {
      nombre:'',
      poder: 0
    }

}
*/


