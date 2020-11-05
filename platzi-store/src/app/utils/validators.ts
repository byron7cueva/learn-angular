import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';

import { CategoriesService } from '@core/services/categories.service';

// En una validación si no hay ningun error debería retornar un null
// SI tiene el error se debe devolver un objeto con el nombre del error

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
        return {price_invalid: true};
    }
    return null;
  }

  // Esta validacion se puede hacer con expresiones regulares
  // pero se realiza de la siguiente manera con el fin de estudio
  static validPassword(control: AbstractControl) {
    const value = control.value;
    if (!containsNumber(value)) {
      return { invalid_password: true };
    }

    return null;
  }

  static matchPasswords(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      return { match_password: true };
    }

    return null;
  }

  static range(minRange: number, maxRange: number) {
    return (control: AbstractControl) => {
      const min = control.get('min').value;
      const max = control.get('max').value;

      // Si no se ingresa ningun rango
      if (min === '' && max === '') { return null; }

      // Si se ingreso almenos uno de los do rangos, el otro es requerido
      if (min <= minRange || max >= maxRange ) {
        return { range: true };
      }

      return null;
    };
  }

  static validateCategory(service: CategoriesService) {
    return (control: AbstractControl) => {
      const value = control.value;
      return service.checkCategory(value)
      .pipe(
        map((response: any) => {
          const isAvailable = response.isAvailable;
          console.log(response);
          if (!isAvailable) {
            return {not_available: true};
          }
          return null;
        })
      );
    };
  }
}

function containsNumber(value: string) {
  return value.split('').find(v => isNumber(v)) !== undefined;
}

function isNumber(value: string) {
  return !isNaN(parseInt(value, 10));
}
