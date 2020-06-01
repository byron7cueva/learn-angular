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

## Formularios Reactivos

En un NgModel tienen un enlace de datos pero no se puede tener el control total, como validar datos, hacer pruebas unitarias.

Pero con los formularios reactivos tenemos observables para poder mirar que datos estan mutando, colocar validaciones, pruebas unitarias y toda la logica va estar dentro del controlador.

## Programacion reactiva

Es la forma de controlar flujos de datos efectivamente en los componentes
de angular

Angular tiene una forma de procesar los flujo de datos, y a eso se lo llama pipes, cualquier operacion que quiera hacer con un flujo de datos que se sea reactivo lo puedo preprocesar con un pipe y agregar 

### Curso Profesional

## Estructura del proyecto

Se utiliza el concepto folder by features. Que es por cada caracteristica de la apicacion se crea un componente
donde se encuentran sus componentes, directivas de la aplicación.

## Migracion de angular 7 a 8

Herramienta: update.angular.io. Esta Herramienta permite migrar desde una version en la cual
se encuentra a una version mas actual de angular.

```
ng update
```

Indica las cosas que estan desactualizadas como podemos actualizarlo

Actualizando la linea de comandos y el core
```
ng update @angular/cli @angular/core
```

Angular actualiza algunos archivos de configuracion al momento de actualizar como:
tslint.json
package.json
src/polyfills.ts
tsconfig.json
src/tsconfig.app.json
src/tsconfig.spec.json
src/app/app-routing.module.ts

# Ivy Renderer

Es el nuevo motor de render de angular
Aplicaciones mas pequeñas ya que reduce el buldle de la aplicacion
Hace las compilaciones sean mucho mas rapidas y que el debugin sea mucho mas controlado
o exacto

v2 Renderer
v4 Renderer2
v8 Ivy
Fecheckable: Lo que hace es eliminacion de codigo para que empaquetadores como: webpack, rollar,
parts; detecten el código que no estamos utilizando y lo eliminen.
Elimina elementos de angular que no se este utilizando

Habilitar ivy:
```bash
ng new nombre_proyecto --enable-ivy
```

En angular 9, ya esta habilitado por defecto.

En proyectos anteriores a angular 9, ya creados se debe habilitar de la siguiente manera

{
	"compilerOptions": { ... },
	"angularCompilerOptions": {
		"enableIvy": true
	 }
	}
 }
}

## Diferencial Loading

Bajar el peso de la aplicacion dependiendo de la version, se ahorra el peso en pollyfils
Detecta si el navegador es moderno o no para cargar los polifills
Angular va generar dos versiones una para ECMAScript5 y otra de ECMAScript2015 para navegadores
mas modernos

## Dynamic Imports

Un feature introducido en angular 8, pero sin embargo. Esto viene desde javascript como la
la forma de precargar modulos directamente.

## Cli builders

Son aquellos que nos habilitan extender la funcionalidades del cliente de comandos de angular
sobre todo correr tareas y correrlas a nuestro modo
Angular divide en tres intenciones los comandos que ejecutamos:

1 Hacer modificaciones o crear codigo como tal:
ng new -> Permite crear un nuevo proyecto
ng generate -> Permite generar componentes, directivas, servicios
ng add -> Permite agregar una libreria y automatizar cualquier tipo de configuracion
ng update

2 Tareas simples

ng help -> Obtener ayuda de la linea de comandos
ng version -> Saber en que version esta
ng doc -> Saber la documentacion

3 Arquitect

ng serve -> Crea todo el servidor de desarrollo
ng build -> Compila la version para produccion y genera todos los assets para subir a un hosting de archivos estaticos
ng test -> Correr pruebas
ng lint -> Correr el linter

Se la conoce como la api de angular, la cual abrio para poder hacer nuestras propias modificaciones
como: Hacer nuestro propio servidor de desarrollo, hacer la construccion, test o linter a nuestra manera.
Nosotros podemos extender oficialmente el API

## Estructura de un proyecto
### Ecalabilidad

Desde las buenas practicas que angular propone para que el proyecto este organizado

#### Patron LIFT

Se encarga de definir 4 reglas basicas para organizar el proyecto:

Locate: Se trata de que podamos localizar rapidamente un componente o un problema
La regla es que no dividamos nuestro proyectio como tal en lo que hacen los artefactos como
los componentes, sini mas bien por caracteristica de nuestra aplicacion

Identify: Se trata de reconocer rapidament el rol que cumple un archivo. Este patron se cumple
asignandole un apellido al archivo:
Ejemplo:
header:
	header.directives.ts // Si este es una directiva
	header.model.ts // Si este es un modelo
	header.pipe.ts
	header.service.ts

Flat: Mantener la estructura del proyecto de forma plana. Es decir no muchos niveles, la mejor
practica es tener maximo dos niveles y cada carpeta tener como maximo 7 archivos.

Try dry: Intentar no repetir. Esto hace que la mantebilidad sea mucho mas facil.

#### Smart and Dump Component

Es un patron que ayuda a separar conceptos en componentes
Dump Component: Un componente solo deberia encargarce de la parte visual e iteractiva de un
componente hacia el usuario, y solo con input y output transmitimos esa informacion.
Y si ese componente geneara alguna iteraccion lo transmitimos por medio de un output a
su padre.
Smart component: Lo que va hacer es fetch del dato que queramos mandar y lo envimos a ese
Dump component por medio de los inputs. Son aquellos que hacen fech de datos o traen datos, para
mandarcelos a los componentes, que solo se encargan de visualizarlos y encargarce de las
visualizaciones.

Los container son los encargados de hacer fetch de la informacion
Los componentes solo se utilizan para input y outputs y encargarse de renderizacion de datos
y la iteraccion.


## Manejo de estado

Redux como patron de arquitectura de datos o como el controlador de estado de las aplicaciones
JavaScript. Este nace desde facebook y por lo tanto es aplicado directamente a proyectos en react.
Sin embargo se volvio transversal sin importar el framework.

Es importante ya que Redux maneja la arquitectura de datos en un solo sentido.
Cuando se maneja aplicaciones grander, con muchos conponetes, se pierde el que, como y cuando la data
llego a ese punto. Este maneja un solo flujo de datos, manejando una sola fuente de la verdad llamada
storage, en la cual siempre va estar disponible la data. Y cualquier cambio se notifica por medio de
action, lo cual hace es describir la accion. Por lo cual si quiero eliminar, actalizar o cualquiera de
estas acciones se lo hace atraves de una accion descriptiva. Y esta la procesa por medio de un reducer.
Este patron es muy comun y lo que hace es que las aplicaciones de escalamiento funcionen mejor.
Y el mantenimiento es mucho mas facil.
No es bueno para aplicacines pequeñas ya que el boolerplate que se necesita es muy complejo. Sin embargo
si la aplicacion empieza a mutar bastante y a manejar grander volumenes de datos o hay una cantidad grande de componentes
Para esos entornos Redux es una buena opcion
Librerias:
NGRX: Redux y Rxjs
Akita: Redux

## Acortar las importaciones
