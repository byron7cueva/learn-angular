import { Component } from '@angular/core';

// Para que el compilador no diga que no existe esa varible declarada
// Declarando una variable global
// Ya que google analytics le agrega

// Este archivo se encarga de la logica del componente
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Indica que archivo html va renderizar el componente
  styleUrls: ['./app.component.scss'] // Nombre de los estilos asociado
})
export class AppComponent {

  constructor() {
  }
}
