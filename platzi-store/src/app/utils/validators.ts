import { AbstractControl } from '@angular/forms';

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
}

function containsNumber(value: string) {
  return value.split('').find(v => isNumber(v)) !== undefined;
}

function isNumber(value: string) {
  return !isNaN(parseInt(value, 10));
}
