import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  // Pare que los modulos que importen este modulo puedan utilizar los modulos
  // que se exportan
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule { }
