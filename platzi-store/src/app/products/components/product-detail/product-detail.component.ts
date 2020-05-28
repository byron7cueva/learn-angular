import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  // ActivedRoute es de inyeccion de dependencia
  // Param es de tipado
  constructor(
    private route: ActivatedRoute,
    private produtcsService: ProductsService
  ) { }

  ngOnInit(): void {
    // Se suscribe al cambio ya que a medida que se cambie de ruta, se cambian los parametros
    // Para escuchar los cambios que existan en los parametros
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.produtcsService.getProduct(id);
    });
  }

}
