import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from '@core/guards/admin.guard';
import { PreloadService } from '@core/services/preload.service';

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
        pathMatch: 'full' // Cuando solo tenga la direccion sin una ruta, y estoy realizando un redirect
      },
      {
        path: 'home', // Es la url
        // Cargando un modulo
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        // Agregando metadata para precarga selectiva
        data: {
          preload: true
        }
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
        // Dynamic Loading
        // loadChildren: './home/home.module#HomeModule' // Esta es la forma en como se cargaba dinamicamente un modulo antes de angular 8
        // Si le le pasa una url dinamica vamos a perder habilidades de analisis estatico del codigo, como webpack o rollar, por lo cual
        // no van hacer ninguna practica de obtimizacion a esos modulos
        // La buena practica es utilizar dinamic imports pero no mandarle urls dinamicas. Se debe utilizar strings literales
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
        data: {
          preload: true
        }
      },
      {
        path: 'contact',
        // El guardian se puede utilizar en varias rutas
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard], // Validando el acceso
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
    // enableTracing: false,
    // paramsInheritanceStrategy: 'always',
    // preloadingStrategy: PreloadAllModules // Indicando una estrategia de pregarga de modulos
    // preloadingStrategy: PreloadService // Indicando tecnica de precarga customizada
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
