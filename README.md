# Reproductor de música

Reproductor de música sencillo para navegador, desarrollado con HTML, CSS y JavaScript sin dependencias externas. Permite escuchar una lista de canciones y controlar la reproducción desde una interfaz visual.

## Funcionalidades

- Reproducir y pausar la canción actual.
- Cambiar a la canción anterior o siguiente.
- Ajustar el volumen.
- Activar la repetición de la canción.
- Activar la reproducción aleatoria.
- Buscar una posición de reproducción con la barra de progreso.
- Usar la barra espaciadora para reproducir o pausar.

## Cómo usarlo

1. Descarga o clona este proyecto.
2. Abre `index.html` en un navegador web.
3. Usa los controles del reproductor para escuchar y gestionar las canciones.

No es necesario instalar dependencias ni ejecutar un servidor.

## Contenido del proyecto

```text
.
├── index.html       # Estructura de la página
├── css/
│   └── style.css    # Estilos del reproductor
├── js/
│   └── main.js      # Controles y lista de canciones
├── assets/          # Archivos de audio
└── imagenes/        # Portadas de las canciones
```

## Lista de canciones

La lista y las rutas de audio y portada se configuran en el arreglo `canciones` de `js/main.js`. Para agregar o cambiar canciones, edita sus propiedades `name`, `artist`, `image` y `file`, y asegúrate de que los archivos existan en las rutas indicadas.