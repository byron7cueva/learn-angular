import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

// Este modulo se utiliza para agrupar componentes que se comparten en la aplicacion
// Pero para utilizarlo este debe ser importado
// Este contendra componentes, pipes y directives. Artefactos grficos

// Pipes
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';

// Directives
import { HighlightDirective } from './directives/highlight/highlight.directive';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  // Explicitamente se debe indicar que componentes van a ser exportados
  // para que otro modulo los pueda utilizar
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
