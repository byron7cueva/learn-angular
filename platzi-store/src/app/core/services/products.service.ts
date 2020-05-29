import { Injectable } from '@angular/core';
// Importando el cliente para hacer peticiones
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';
import { environment } from '../../../environments/environment';

const URL_API = `${environment.url_api}/products/`;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts() {
    // Se puede indicar el tipo de dato que deseamos que nos retorne
    return this.httpClient.get<Product[]>(URL_API);
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`${URL_API}${id}`);
  }

  createProduct(product: Product) {
    return this.httpClient.post(URL_API, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    // Con partial podemos indicar que solo queremos enviar una parte del producto
    // haciendo que no sea requerido todas sus propiedades
    return this.httpClient.put(`${URL_API}${id}`, changes);
  }

  deleteProduct(id: string) {
    // Algunas API's escogen devolver el objeto que elimino
    // Otras solo devuelven un true o un false
    return this.httpClient.delete(`${URL_API}${id}`);
  }
}
