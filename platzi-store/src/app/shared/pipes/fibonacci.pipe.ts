import { Pipe, PipeTransform } from '@angular/core';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Pipe({
  name: 'fibonacci',
  pure: true // Este valor es por defecto, debe ser true para que utilice el concepto de funciones puras
})
export class FibonacciPipe implements PipeTransform {

  transform(value: number): number {
    console.log('calc');
    return fibonacci(value);
  }

}
