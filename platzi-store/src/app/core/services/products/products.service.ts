import { Injectable } from '@angular/core';
// Importando el cliente para hacer peticiones
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../models/product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts() {
    // Se puede indicar el tipo de dato que deseamos que nos retorne
    return this.httpClient.get<Product[]>(`${environment.url_api}/products/`);
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`${environment.url_api}/products/${id}`);
  }
}
