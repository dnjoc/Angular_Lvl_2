import { Injectable } from '@angular/core';
import { Desafio3a2Component } from '../components/desafio3a2/desafio3a2.component'

@Injectable({
  providedIn: Desafio3a2Component
})
export class PersonaService {
  persona = {
    nombre: 'Eduardo',
    horaConexion: Date.now(),
    saldo: 9751.77,
    specialDay: 5
  };
}
