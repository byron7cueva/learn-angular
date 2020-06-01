import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@core/services/products.service';
import { Product } from '@core/models/product.model';

// Los operators nos ayudan a manipular cualquier flujo de datos dentro de un observable
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // product: Product;
  product$: Observable<Product>;

  // ActivedRoute es de inyeccion de dependencia
  // Param es de tipado
  constructor(
    private route: ActivatedRoute,
    private produtcsService: ProductsService
  ) { }

  ngOnInit(): void {
    // Se suscribe al cambio ya que a medida que se cambie de ruta, se cambian los parametros
    // Para escuchar los cambios que existan en los parametros
    // Lo siguiente realiza doble suscribe
    /*this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });*/

    // Encadenando un suscribe a traves de switchMap, para no realizar doble suscribe
    /*this.route.params
    .pipe(
      switchMap((params: Params )=> {
        return this.produtcsService.getProduct(params.id);
      })
    )
    .subscribe(product => {
      this.product = product;
    });*/

    // Sin suscribirse pero utilizando el async el cual controle el suscribe a traves de una variable Observable
    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params ) => this.produtcsService.getProduct(params.id))
    );
  }

  fetchProduct(id: string) {
    // HTTPClient utiliza el patron Observable por lo cual se debe suscribir
    this.produtcsService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      });
  }

  createProduct() {
    const newProduct: Product = {
      id: '22',
      title: 'Nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto'
    };

    this.produtcsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const id = '22';
    // Indicandole que solo es una parte de un producto
    const changesProduct: Partial<Product> = {
      title: 'Edicion titulo',
      price: 555
    };

    this.produtcsService.updateProduct(id, changesProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    const id = '22';
    this.produtcsService.deleteProduct(id)
      .subscribe(result => {
        console.log(result);
      });
  }

}
