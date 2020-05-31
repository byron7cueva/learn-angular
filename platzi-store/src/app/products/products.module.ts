import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../material/material.module';

import { ProductsContainer } from './containers/products/products.container';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
    // Aca se agregand los componentes
    declarations: [
        ProductsContainer,
        ProductComponent,
        ProductDetailComponent
    ],
    // Aca se agregan los modulos
    imports: [
        CommonModule,
        MaterialModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule {

}
