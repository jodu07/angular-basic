import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

 

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 150000
    },
    {
      nombre: 'Pikolo',
      poder: 8000
    }
  ];

  get ppersonajes(): Personaje[] {
    return [...this._personajes];
  }


  constructor() { }

  agregarPersonaje(argumento: Personaje){

    this._personajes.push(argumento);



  }
}
