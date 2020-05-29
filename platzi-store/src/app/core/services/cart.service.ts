import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  // Para el control del flujo de datos
  private cart = new BehaviorSubject<Product[]>([]);

  // Indicando una variable tipo observable
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    // Para no tener problemas de inmutabilidad
    this.products = [...this.products, product];
    console.log(this.products);
    // Con esto se crea un cambio de datos que cualquier componente puede preguntarselo
    this.cart.next(this.products); // Notificar a todos los componentes suscritos que hubo un cambio
  }
}
