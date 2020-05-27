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

## ngIf

Es una directiva que permite hacer condicionales dentro de un template
Se utiliza como *ngIf
Permite mostrar ciertos elementos  de un template de forma dinamica, a partir de una variable definida en el componente o una condicional en nuestro template
Permite condicionar elementos dinamicamente en el template