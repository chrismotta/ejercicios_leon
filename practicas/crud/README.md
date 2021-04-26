# Creación de CRUD

> Qué es un CRUD?\
> https://es.wikipedia.org/wiki/CRUD\
> Qué es una single-page application (SPA)\
> https://es.wikipedia.org/wiki/Single-page_application

## Descripción

Crearemos una SPA dentro de la cual podamos agregar, editar y borrar comentarios.\
Los comentarios se guardaran en un array de objetos con el siguiente formato:

```js
[
  {
    _ID: 123,
    creador: "Leon Rodriguez",
    frechaCreacion: "2021-04-23",
    frechaModificacion: "2021-04-23",
    comentario: "Este es un comentario de prueba",
    editado: false,
  },
];
```

## Objetivo 1

Crear el index.html que usaremos como entrada a la aplicación y agregarle un formulario con los campos necesarios para el comentario (creador y comentario)

## Objetivo 2

Crear el script que va a tener la base de nuestra lógica. Generar la función que va a agregar lo que reciba de nuestro formulario al array de comentarios

## Objetivo 3

Crear el modulo de comentario en un archivo aparte, y usar ese modulo para renderizar los comentarios que se van ingresando en el array

- [x] Identificar el form dentro del script y escuchar el evento submit
- [ ] Agregar cada valor submiteado al array de comentarios
- [ ] Agregar a los comentarios los valores autogenerados (\_ID, frechaCreacion, fechaModificacion, editado)
- [ ] Mostrar la lista de comentarios en la aplicación
- [ ] Crear un componente externo para usar como modulo de comentario

## Objetivo 4

Crear los metodos editar y borrar, que deben ser despachados desde nuestro módulo de comentario y gestionados en nuestro script general
