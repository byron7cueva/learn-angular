import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Para que el compilador no diga que no existe esa varible declarada
// Declarando una variable global
// Ya que google analytics le agrega
declare var gtag;

// Este archivo se encarga de la logica del componente
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Indica que archivo html va renderizar el componente
  styleUrls: ['./app.component.scss'] // Nombre de los estilos asociado
})
export class AppComponent {

  constructor(
    private router: Router
  ) {
    // Notificando a google analytics la ruta en la que se esta navegando
    // Se realiza esto ya que la aplicacion es single page application
    const navEndEvents$ = this.router.events
    .pipe(
      // Filtrando los eventos solo al evento de finalizar, no quiero escuchar mas
      filter(event => event instanceof NavigationEnd)
    );

    // Capturando flujo de datos cada vez que finalice la navegacion
    // Y notificar esa informacion a google analytics
    navEndEvents$.subscribe((event: NavigationEnd) => {
      console.log('Notificando a google analytics', event.urlAfterRedirects);
        // gtag('config', 'UA-163186213-2');
      gtag('config', 'UA-163186213-2', {
        page_path: event.urlAfterRedirects
      });
    });
  }
}
