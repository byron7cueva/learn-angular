# Comandos utilizados con angular cli
## Instalar

La instalacion se la debe resalizar de forma global

```bash
npm i -g @angular/cli
```

## Ver la version instalada
```bash
ng version
```

## Crear una nueva aplicacion
```bash
ng new nombre_proyecto
```
## Entorno de desarrollo
Realiza una pre compilacion en modo de desarrollo y levanta un servidor
```bash
ng serve
```
Se puede cambiar el host con un flag
Se puede cambiar el puerto con el flag --port

## Ver versiones

Ver versiones de lo que se tiene instalado de angular asi como tambien los paquetes

```bash
ng --version
```

## Alistar una version para produccion

Compila una version para correr en un entorno de produccion

```bash
ng build --prod
```

Genera una carpeta distribution en donde tiene todos los assets de la aplicacion

