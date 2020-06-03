# Progresive Web Application (PWA)
Aplicaciones Web Progresivas

Que son?
Habilitan caracteriesticas modernas en el navegador, para potenciar a las aplicaciones web
actuales.

Una PWA trata de aparentar que es una aplicacion nativa, con ciertos tipos de caracteristicas
vamos a lograr ese objetivo.
1) Trabajan sin conexion y en redes lentas
2) Carga en segundos, ya que se va cachar los algunos de los assets que carga la apliacion web y esto permite
que el navegador ya lo tenga en cache y no le vuelva a pedir al navegador
3) Notificaciones Push. Que son las que normalmente aparecen en las aplicaciones nativas. Donde podemos
enviar a nuestros usuarios una push notification a los usuarios de algo que queramos indicarles.
4) Esta basado en la web: Se sigue utilizando html, css y javascript.
5) Deep Links. Detectable. Es como desde cualquier lugar abro un link y me abre la aplicacion nativa.
6) Es mas pequeña en tamaño, ya que esta pesa menos que una aplicacion nativa.
7) Siempre actualizada: Como se basa en la web y seguimos utilizando un servidor para dar a todos los usuarios
el acceso a la aplicacion, simplemente enviamos el release a produccion y ya todos los usuarios tienen esa
version.
8) Icono en la pantalla de inicio: Los usuarios van a tener un icono para lanzar la aplicacion como si
fuera un aplicacion nativa.

En el mundo mobil hay tres caminos para desarrollar una aplicacion
PWA:

Híbrido:
Cordova
Capacitor
Normalente tienen un WebView, donde se compila la aplicacion que es web y se la empaqueta como una aplicación
nativa. En estos casos es muy conocido un framework llamado ionic.
Esta es util porque se puede reusar todo el codigo web empaquetarlo y mandarlo a una tienda.

Bridge:
NativeScript
React Native
No empaquetan en un WebView, sino que lo que hacen es utilizar codigo de javascript, typescript para poder
hacer la logica, pero todo el render o la parte de interfaz grafica, lo hacen en otro tipo de lenguaje
como XML, para que la UI corra nativamente en el dispositivo.

Nativo:
Construir la aplicacion en Android o Swift para IOS.

Se debe tomar en cuanta las habilidades del equipo y las caracteristicas nativas que se van a utilizar.
Si la app va utilizar hardware o solo es de contenido.

PWA Sirve muchisimo para atraer usuario nuevos. Ya que elemina una friccion en buscar una aplicacion e instalarla
descargarla, abrirla y usar la aplicacion.

Native: Para brindar una mejor experiencia a ususarios frecuentes.

## Services Workers

Es una propuesta directa del equipo de Google Chome, donde proponen estas mejoras.
Es una seuencia de comandos que van a correr en segundo plano que van a correr en tu navegador. Esto permite
que varias de las instrucciones de la aplicacion las pueda correr en segundo plano. Como por ejemplo:
Push Notification, guardar informacion en cache, etc.

El services wokers intercepta la solicitud de recursos y los deja en cache si se los ha solicitado anteriormente,
entonces los devulve desde cache, haciendo la aplicacion mas rapida. El service worker puede tomar la decicion
si esque los archivos no estan actualizados y obtenerlos desde el internet. Si falla desde el internet
saca todo ese contenido desde la cache.

## Generar la aplicacion pwa

Creando una configuracion base:
```bash
ng add @angular/pwa
```

Crea los siguiente archivos:
manifest.webmanifest: Este archivo va ayudarnos a que la aplicacion sea instalable
ngsw-config.json: Nos va ayudar a trabajar con el service worker

Para probar una aplicacion PWA no se puede puede en un entorno de desarrollo, sino que se debe probar en un
entorno de produccion. Porque funciona con https, para que el service worker funcione de forma segura.

Por defecto una aplicacion puede ser PWA si esta tiene el certificado SSL

## Firebase hosting

Nos pide instalar la siguiente dependencia en el proyecto
```bash
npm install -g firebase-tools
```

## Lighthouse

Es una herramienta de auditoria que nos sirve para inspeccionar que tan bien estamos haciendo nuestra aplicacion
Web Progresiva o que nos falta por implementar. Esta se base en el mejor estandar de la web, mirando cosas
como: performance, accesibilidad, seo.

Esta realiaz un reporte pero no para todas las rutas de la aplicacion, si no que se debe realizar por cada
ruta.

## Cache de assets

ngsw-config.json
Existen dos tipos de installMode
prefetch: Precargar ese archivo una vez que los tiene en el inicio y los guarda en la cache.
Lo malo es que en la primera carga puede consumir ancho de banda.
No debemos preocuparnos que no carge la ultima versio del archivo, ya que la compilacion de webpack genera
un id unico.
lazy: No hago un cache apenas se obtenga el archivo, sino cada vez que se detecte que el navegador o el usuario
accede a ese archivo. A medidad que el usuario lo va necesitando lo va poniendo en cache.
Para cargar los archivos que no tienen un hash

## Cache de request

Hay que tener cuidado con eso ya que hay informacion que puede ser sencible y no vale que se mantenga en
cache.

Para hacer cache de todo en urls, se puede poner el dominio/**, o indicarle cada ruta que se desea cachear como
por ejemplo: ["dominio/product", "dominio/ventas"]
cacheConfig
maxSize: Es el numero de request que vamos a guardar. Son como numero de intentos de refrescar la informacion.
maxAge: Por cuanto tiempo va vivir esa cache. Por ejemplo para indicarle 7 dias le asignamos 7d.
u: millisegundos
m: minutos
h: horas
d: dias

strategy
Las estrategias de carga, existen dos:
performance: Es la que siempre va dar la mejor experiencia hacia el usuario. Es decir sacarlo de la cache.
Si la informacion esta en la cache, simpre va primar la cache.
freshness: Esta estrategia, siempre saque la informacion de internet pero, si el usuario se quedo sin
conexion o tiene una red lente, entonces bueno ahora si por segunda opcion tome de cache.

timeout: Tiempo de espera, esta espera es depende de la estrategia. Lo mas mormal es colocar segundos
2s5u Se puede tambien hacer convinanciones

Se recomienda freshness como strategia.

## Actualizaciones

SwUpdate es un servicio de angular que nos permite realiar actuallizaciones a una aplicacio pwa con angular.


