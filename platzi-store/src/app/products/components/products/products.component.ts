import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
