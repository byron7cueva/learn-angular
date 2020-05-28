import { Injectable } from '@angular/core';
// Importando el cliente para hacer peticiones
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts() {
    // Se puede indicar el tipo de dato que deseamos que nos retorne
    return this.httpClient.get<Product[]>('https://platzi-store.herokuapp.com/products/');
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`https://platzi-store.herokuapp.com/products/${id}`);
  }
}
