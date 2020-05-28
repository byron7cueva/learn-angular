import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';

// Este modulo se utiliza si se va igualmente a compartir en toda la apliacacion
// Si y solo si se genera una referencia unica
// Este va estar en todos los modulos lo importes o no
// Se uttiliza para guardar servicios que tengan una sola referencia de datos. Servicios de datos


@NgModule({
  // Aca se agregan los componentes
  declarations: [],
  // Aca se agregan los modulos
  imports: [
    CommonModule
  ],
  // Aca se agregan los servicios
  providers: [
    ProductsService
  ]
})
export class CoreModule { }
