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
