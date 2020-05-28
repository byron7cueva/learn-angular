import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

// Rutas
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // Para indicar que componentes se van a basar en el layout, se agregan en children
    // A esto se lo conoce como vistas anidadas
    children: [
      {
        // Una regla de ruta para que al ingresar a / redireccione a home
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
      }
    ]
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
