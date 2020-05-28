import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) {
    // Acceder al elemento nativo de html
    element.nativeElement.style.backgroundColor = 'red';
  }

}
