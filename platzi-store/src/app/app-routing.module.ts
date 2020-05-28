import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

// Rutas
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' // Cuanso solo tenga la direccion sin una ruta
  },
  {
    path: 'home', // Es la url
    component: HomeComponent // Se debe enlazar un componente
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id', // Ruta para recibir parametros dinamicos
    component: ProductDetailComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**', // Significa que no hubo match con la ruta
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
