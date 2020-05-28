# Conceptos

## string interpolation

Es la forma de renderizar la variables en tool template.
Para ello se utiliza doble llaves {{}}
Permite concatener instrucciones de javascript
Lo que hace es un enlace de datos desde el componente al template

```javascript
{{ nombre_varibale }}
```

## Data binding
Se lo conoce como enlace de datos
Se utiliza la directriva ngModel, la cual trabaja solo en los formularios
Se debe agregar la siguiente libreria en app.module.ts

```javascript
import { FormsModule } from '@angular/forms';
```
Para que la aplicacion lo pueda utilizar se lo debe agregar a los imports

```javascript
@NgModule({
	imports: [
		FormsModule
	]
})
```

Enlazando a un input

```html
<input type="text" [(ngModel)]="title"/>
```

Reliza un enlace de datos y cualquier cambio realizado en el input se va ver reflejado en la variable del componente.

## Estructuras de control

### ngIf

Es una directiva que permite hacer condicionales dentro de un template
Se utiliza como *ngIf
Permite mostrar ciertos elementos  de un template de forma dinamica, a partir de una variable definida en el componente o una condicional en nuestro template
Permite condicionar elementos dinamicamente en el template

```html
<div *ngIf="title === 'byron'">
  Este es un div
</div>
```

### ngFor

Es una directiva, sirve para hacer una iteraccion de un array

```html
<ul>
  <li *ngFor="let item of items; index as i">
    {{item}} {{i}}
  </li>
</ul>
```

### ngSwitch

Controlamos varios if que tengamos anidados

```html
<div [ngSwitch]="title">
  <p *ngSwitchCase="'nicolas'">este es nicolas</p>
  <p *ngSwitchCase="'byron'">este es byron</p>
  <p *ngSwitchCase="'julian'">este es julian</p>
  <p *ngSwitchCase="'camilo'">este es camilo</p>
</div>
```

## Componentes

### Crear un componente

Angular utiliza los decoradores para saber que rol va cumplir un elemento
Los componentes tiene metadata

### Input y Output
Que es la manera de como de como podemos enviar datos a un componente y tambien como podemos recibir de el
Se lo conoce como Property binding (Enviar por medio de una propiedad datos) y event binding (Recibir datos por medio de eventos)

### Ciclo de vida
constructor: Es lo primero que se ejecuta. Para crear el componente y asignarle la interfaz
ngOnChange: Detecta el cambio cada vez que se cambia los datos en un input
. Este se ejecuta varias veces que hay un cambio. Y poder ver el estado anteior y el estado nuevo.
ngOnInit: Se ejecuta solo una vez, es cuando el componente esta listo en la interface grafica. Aqui es el mejor lugar hacer llamadas a componentes o a una rest API.
ngDoCheck: Detecta cuando los elementos hijos del componente son creados y puestos en la interface.
ngOnDestroy: Detecta cuando el elemento es quitado de la interface.

## Pipes

Funcionan como una tuberia donde ingresan datos de un tipo y puedes entregar otro valor, asi como tambien se puede conactenar varios pipes

## Directivas
Sierven para modificar el DOM dinamicamente de un componente especifico
Se debe utilizar para por ejemplo el comportamiento de tipo autocompletar

## Modulos y rutas
Nos permiten abstraer y dividir menjor por dominio la aplicacion
Un modulo lo que hace es agrupar varios de los artefactos de angular, como servicios, componentes y directivas.

Modulo core: guarda todos los servicios o componentes que vamos a utilizar en todos los otros modulos. Esto genera una sola referencia de el. Siguiendo uno de los principios solid.
Modulo shared: Se puede tener servicios y componentes compartidos.

## Guardianes

Permiten saber quien puede entrar o no a una ruta en especifico

Puedoo activarlo (canActivate): Indica si muestra o no una ruta