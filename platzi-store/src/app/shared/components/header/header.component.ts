import { Component, OnInit, HostListener } from '@angular/core';

import { CartService } from '@core/services/cart.service';
// Map se utiliza para transformar el valor que llega a uno nuevo
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // total = 0;
  total$: Observable<number>;
  installEvent = null;

  constructor(
    private cartService: CartService
  ) {
    /* this.cartService.cart$.subscribe(products => {
      this.total = products.length;
    }); */

    // Utilizando pipes
    /* this.cartService.cart$
    .pipe(
      map(products => products.length)
    )
    .subscribe(total => {
      this.total = total;
    }); */

    // Obteniendo el valor a traves de una variable observable
    // No se suscribe si no mas bien es un flujo de datos que va estar vivo a traves del template de angular
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  ngOnInit(): void {
  }

  // Necesitamos activar el listener
  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    event.preventDefault(); // Cancelando su funcion por defecto
    console.log(event);
    this.installEvent = event;
  }

  installByUser() {
    if (this.installEvent) {
      this.installEvent.prompt();
      // Obtener la respuesta del usuario
      this.installEvent.userChoice
      .then(rta => {
        console.log(rta);
      });
    }
  }

}
