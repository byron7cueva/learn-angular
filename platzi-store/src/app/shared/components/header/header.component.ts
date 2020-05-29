import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart.service';
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

}
