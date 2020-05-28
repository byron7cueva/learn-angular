import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../material/material.module';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
    // Aca se agregand los componentes
    declarations: [
        ProductsComponent,
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
