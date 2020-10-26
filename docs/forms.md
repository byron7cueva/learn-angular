# Forms

## Novedades de Angular 10

* Date range picker, es parte de angular material, se puede seleccionar rangos
* Warnings about CommonJS: Son alertas que angular nos va dar cuando estemos tratando con librerías que tengan estándares antiguos de javascript.
* Optional stricter: Es una opción para hacer estricto de TypeScript. Se debe typar todo y dejar de utilizar any.
* Update dependencies: Actualiza las dependencias del ecosistema.
* New default browser configuration
  * .browserslistrc: Este archivo le dice a angular de que forma debe compilar el proyecto para ver si soporta navegadores viejos o no, permitiendo ser compatible. Por defecto no va soportar internet explorer y va tener soporte para navegadores modernos,

## Migración

* Angular se renueva cada 6 meses y nos brinda una nueva versión mejorada.

* Se puede actualizar con ngUpdate, nos facilita realizando una migración automática.

  * update.angular.io


## Manejo de formularios

Angular ofrece dos formas para manejar formularios

### Template Forms  (FormModule)

* Tienen que ver con la directiva ngForms y también con ngModel
* Los ngModel se usa para inputs.

### Reactive Forms  (ReactiveFormsModule)

* Son más potentes para validaciones, asincronismo y se basan en Observables.
* Se usa para formularios más complejos.
* El rendimiento es más alto.

## FormControl 

* Es la parte más atómica de un formulario reactivo.
* Este contiene varios estados.

## FormGroup

* Es un conjunto de FormControls
* Para el manejo de múltiples campos. Es un conjunto de forms control.

## FormBuilder

* Es un generador de formularios.
* Es un servicio que nos ayuda cómodamente a crear formularios.
* Permite una sintaxis mas rápida y mas cómoda.
* Nos devuelve un FormGroup el cual tiene un estado similar a los que tiene el FormControl, pero valida todos los campos.

## Validaciones

* Angular ofrece 11 métodos de validación.
* min and max
* required and requiredTrue (Debe ser requerido pero true)
* email
* minLength and maxLength
* pattern: Para expresiones regulares
* nullValidator
* compose
* composeAsync

## Expresiones regulares

* regex101.con: Es un revisor online de expresiones regulares.

## Errores comunes a la hora de realizar formularios

* [Design Better Forms](https://medium.com/nextux/design-better-forms-96fadca0f49c)

## Validaciones personalizadas

* Se puede crear una validación personalizada, pero siempre y cuando no aplique los 11 tipos de validaciones que nos ofrece angular.

## Validaciones grupales

* Validaciones que dependen de dos o más campos.

## Validaciones condicionadas

* Son aquellas que cambian dinámicamente respecto a los cambios que haga el usuario en el formulario.
* Esto se realiza en tiempo de ejecución de acuerdo a los cambios que realiza el usuario en la interfaz.

## Input tipo file

* Angular no nos ofrece un componente para inputs de tipo file.

