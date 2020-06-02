# Mejorar rendimiento

## Bundle Size

Esto se refiere a cuanto pesa en bites las aplicaciones.
Con lazy loading ayuda a fragmentar la carga del sitio.

## Tree Shaking

Esto se refiere a que herramientas empaquetadoras como webpack puedan detectar codigo de las dependencias que no se este utilizando
y quitar eso para que el peso de la aplicacion sea menor.
Ivy ayuda a disminuir codigo de angular y del codigo de la aplicacion.

## Webpack Bundle Analizer

Lo que hace es darnos un reporte, un analisis inicial gráfico donde ser puede ver que paquetes estan pesando
mas.

Compilar una version de produccion con estadisticas del peso de los archivos:

```bash
ng build --prod --stats-json
```

Ver el analisis del peso de los archivos

npx: Ayuda a ejecutar una libreria que esta dentro de mi proyecto.

```bash
npx webpack-bundle-analyzer dist/apliacacion/stats-es2015.json
```

Nos permite ver el analisis de los archivos y el peso de los mismos.

## Bundle Phobia

Pagina: bundlephobia.com

Nos ayuda a ver alternativas de las dependencias que estamos utilizando.
Tambien permite analizar el archivo package.json
Nos permite buscar librerias, ver su peso y ver sus opciones.

Hay tareas que se las puede asignar un backend.

### date-fns

Es una libreria para la manipulacion de fecha, muy completa, utiliza programacion funcional. Cumple
con objetivos muy puntuales, parecida a moment.js pero pesa menos.


## Angular Budget

Armar presupuesto

Es una herramienta que permite, para cuando generemos la aplicacion no pese mas de esos limites establecidos

Calculadora para estimar cuanto va tardar en cargar la aplicacion
https://perf-budget-calculator.firebaseapp.com


## Aumentar velocidad de ejecucion

### Code Splitting a nivel de rutas - Preload All Modules

Hacer tecnicas de precarga. La tecnica por defecto que utiliza angular es lazy loading. Pero esta tiene
un problema hay deficiencia en la precarga si la aplicacion tiene muchos modulos, y utilizando muchos datos
sin que estos estemos utilizando.

### Estrategia de carga selectiva
Esta depende mas del desarrollador ya que el selecciona que modulos van hacer la precarga. Pero normalmente
no conocemos el comportamiento del usuario, asi que no sabemos por donde empezara y guiara su navegación.

### Quicklink Strategy

Esto hace que la precarga de modulos no sea por parte del desarrollador sino sea dinamico de acuerdo al
comportamiento que le damos a la aplicacion. Esto se hace gracias a interception observer API, que es la API
base para utilizar esta estrategia; esta lo que hace es detectar los links que entran al viewport de la
aplicacion.
La libreria que utiliza esta tecnica se llama ngx-quicklink
Se debe importar el modulo de QuicklinkModule a los modulos que utilizan routerLink

### Machine Learning para predecir rutas

En base a la navegacion del usuario, generamos un modelo predictivo para que angular precarge el modulo
necesario, esto se llama cadenas de Markov (creado por Andrei Andreyevich Markov)

Esta cadena de markov, lo que hace es examinar la probabilidad de navegar a una pagina u otra.
Se asigna un peso. Por ejemplo de 0 a 1

Para cualquier modelo predictivo, debemos contar con data existente. Se necesita dejar al aire por un momento
el sitio web para luego aplicar esta tecnica.

Para ello se utiliza la libreria Guess.js
Lo que hace esta es:
1) Generar la data a traves de google analytics
2) Generar el modelo predictivo utilizando las cadenas de markov con tensor flow
3) Y ese modelo predictivo le agrega a los assets de nuestra aplicacion
4) Una vez puesto este a nuestros assets, va a precargar automaticamente el modulo que tenga mayor
prediccion en un punto especifico

### Google Analytics

Como es una aplicacion single page, en el componente global se debe hacer una configuracion especial
para que cada ves que finalice de cargar una seccion mande esa informacion que necesita a google analytics.


### Guess.js
https://guess-js.github.io/

Sigue la metodologia de cadenas de Markov

yaget.js (Investigar)

Los pasos que debe cumplir son los siguientes:
1) La aplicacion debe estar modularizada.
2) Cambiar configuraciones de angular como tal

Este solo funciona para produccion

### Precarga con Services workers

Volviendo la aplicacion en una web progresiva, esto se hace utilizando tecnicas de precaching o
haciendo cacheo de los archivos.

Se puede cachear, para que este en cache y la carga sea mas rapida.

Lo que se debe hacer lo siguiente

```bash
ng add @angular/pwa --project nombre-proyecto (El nombre del proyecto se encuenta en angular.json dentro de "projects")
```

Solo funciona para una version en produccion.

### Server side render

Nos ayuda en el rendimiento, solucionando 3 puntos claves:

1) SEO: Posicionamiento en motores de busqueda.
La version sin javascript es la que leen los motores de busqueda, y capturan esa informacion para poderla
indexar en motores. Si la pagina no tiene server side render va ser muy dificil que los buscadores puedan
posicionar la pagina en las busquedas.
2) Nos ayuda en el performance ya que el renderizado no se hace desde el cliente, sino desde el servidor.
3) First Page: La carga de la pagina inicial se va hacer muy rapida.

En angular se lo cuede aplicar con un paquete que tienen que se llama Universal

```bash
ng add @nguniversal/express-engine --clientProject nombre-proyecto
```

Correr la aplicacion, ya no se la debe hacer con ng build sino:
```bash
npm run build:ssr && npm run serve:ssr
```

Al pasar al server side render perdemos ciertas facultades que tenemos en el navegador.
Por ejemplo: navigator, window, document

## Rendimiento en tiempo de ejecución

### Change Detection

La deteccion de cambios se llama Change Detection.

Funciones puras:
Sin importar cuantas veces se ejecute esa funcion con los mismos parametros siempre van a dar el mismo
resultado. Angular utiliza este concepto en sus pipes para poder procesar y hacer una tecnica memoraized.
Esta tecnica se trata de hacer memorizacion de un valor calculado previamente, si le mando un mismo valor
que previamente lo calculo, revisa si existe ese valor en cache y no realiza ningun calculo solo devuelve
el valor que se calculo previamente.

## Suscribe
Los HttpClient, son observables que se desuscriben automaticamente cuando el request fue completado,
en ellos no nos podemos preocupar por bloqueos de memoria.
Si tenemos otro Observable que no es HttpClient, debemos asegurarnos de desuscribirnos.
Si no estamos generando un bucle de memoria, generando una suscripcion a datos que puede ser que ya
no estemos utilizando


