import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products.service';

// Este componente ya que solo se encarga de hacer fecth de datos se lo define como container

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    // Este por defecto devuelve un observable
    this.productsService.getAllProducts()
      .subscribe(products => {
        // Products es de tipo Object
        this.products = products;
      });
  }

  clickProduct(id: number) {
    console.log('product', id);
  }

}
