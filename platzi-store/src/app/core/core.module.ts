import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// El siguiente modulo se lo debe importar para hacer consultar a un API Rest
import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from './services/products.service';

// Este modulo se utiliza si se va igualmente a compartir en toda la apliacacion
// Si y solo si se genera una referencia unica
// Este va estar en todos los modulos lo importes o no
// Se uttiliza para guardar servicios que tengan una sola referencia de datos. Servicios de datos


@NgModule({
  // Aca se agregan los componentes
  declarations: [],
  // Aca se agregan los modulos
  imports: [
    CommonModule,
    HttpClientModule
  ],
  // Aca se agregan los servicios
  providers: [
    ProductsService
  ]
})
export class CoreModule { }
