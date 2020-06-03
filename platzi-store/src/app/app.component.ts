import { Component } from '@angular/core';

// Este archivo se encarga de la logica del componente
@Component({
  selector: 'app-root',
  // template: '<router-outlet></router-outlet>', // Indica que archivo html va renderizar el componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Nombre de los estilos asociado
})
export class AppComponent {
}
