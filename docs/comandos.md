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

## Generadores

Permite generar codigo automaticamente

Generando un componente

```bash
ng g c nombre_componente
```

ng lint
Nos ayuda a encontrar errores en nuestro codigo
Nos ayuda a validar el estilo de codigo
```bash
ng lint
```

## Generar un pipe

```bash
ng g p nombre_pipe
```

## Generar una directiva

```bash
ng g d nombre
```

## Generar servicios

```bash
ng g s nombre-servicio

```

## Generar un modulo

```bash
ng g m nombre-modulo
```

## Generar guardianes

```bash
ng g g nombre-guardian

```

## Agregando angular material

```bash
ng add @angular/material
```

## Generar un modulo con el routing a la vez

```bash
ng g m nombre-modulo --routing
```

## Agregar angular cdk

```bash
ng add @angular/cdk

```

## Generar componentes con angular schematic

### Generar un formulario

```bash
ng g @angular/material:address-form nombre-componente
ng g @angular/material:address-form admin/components/product-form
```

### Generar una navegacion

```bash
ng g @angular/material:nav nombre_componente
```

## Constuir una versio para produccion
```bash
ng build --prod
```

## Construir en un ambiente customizado

```bash
ng serve -c=nombre_ambiente

```

## Construir una version en un ambiente customizado

```bash
ng build -c=stag
```

## Subir a produccion con firebase hosting

```bash
firebase init
```