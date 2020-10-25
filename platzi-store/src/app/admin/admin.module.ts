import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { DatesComponent } from './components/dates/dates.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { MaterialFormComponent } from './components/material-form/material-form.component';
import { ChecksComponent } from './components/checks/checks.component';
import { GrupalValidationComponent } from './components/grupal-validation/grupal-validation.component';


@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProductsListComponent,
    FormProductComponent,
    ProductEditComponent,
    DatesComponent,
    BasicFormComponent,
    FormBuilderComponent,
    MaterialFormComponent,
    ChecksComponent,
    GrupalValidationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule, // Para trabajar como formularios rectivos
    MaterialModule
  ]
})
export class AdminModule { }
