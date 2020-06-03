import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

// Este archivo se encarga de la logica del componente
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Indica que archivo html va renderizar el componente
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Nombre de los estilos asociado
})
export class AppComponent implements OnInit {

  constructor(
    private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    this.updatePWA();
  }

  updatePWA() {
    // Indicar que este pendiente si hay una nueva version de la aplicacion
    this.swUpdate.available
    .subscribe(value => {
      console.log('update', value);
      // Haciendo una reload si hay una nueva version
      window.location.reload();
    });
  }
}
