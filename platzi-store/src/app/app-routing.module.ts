import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './guards/admin/admin.guard';

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
        // Cargando un modulo
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      /*{
        path: 'products',
        component: ProductsComponent // Se debe enlazar un componente
      },
      {
        path: 'products/:id', // Ruta para recibir parametros dinamicos
        component: ProductDetailComponent
      },*/
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        // El guardian se puede utilizar en varias rutas
        canActivate: [AdminGuard], // Validando el acceso
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  // La siguiente ruta siempre debe ir al ultimo
  {
    path: '**', // Significa que no hubo match con la ruta
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // La precarga del resto de modulos lo va ser el navegador si este ya no se encuentra ocupado
    preloadingStrategy: PreloadAllModules // Indicando una estrategia de pregarga de modulos
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
