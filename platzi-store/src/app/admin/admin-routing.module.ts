import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      },
      {
        path: 'dates',
        component: DatesComponent
      },
      {
        path: 'basic',
        component: BasicFormComponent
      },
      {
        path: 'builder',
        component: FormBuilderComponent
      },
      {
        path: 'material',
        component: MaterialFormComponent
      },
      {
        path: 'checks',
        component: ChecksComponent
      },
      {
        path: 'grupal-validation',
        component: GrupalValidationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
