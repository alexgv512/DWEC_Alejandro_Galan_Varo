# Tarea 6
Este proyecto es una tarea de desarrollo web que utiliza HTML, CSS, JavaScript, jQuery y Tailwind CSS para crear una página web que muestra fotos de gatos obtenidas de The Cat API.

## Estructura del Proyecto

```
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js
├── src/
│   ├── index.html
│   ├── jquery.html
│   ├── estilos/
│   │   ├── principal.css
│   │   └── salida.css
│   ├── img/
│   └── js/
│       ├── index.js
│       └── jquery.js
└── node_modules/
```

## Descripción de Archivos

- **.gitignore**: Lista de archivos y directorios que Git debe ignorar.
- **package.json**: Archivo de configuración de npm que incluye las dependencias y scripts del proyecto.
- **package-lock.json**: Archivo que asegura que las instalaciones de npm sean reproducibles.
- **README.md**: Este archivo, que proporciona una descripción general del proyecto.
- **tailwind.config.js**: Configuración de Tailwind CSS.
- **src/**: Directorio que contiene los archivos fuente del proyecto.
- **index.html**: Página principal del proyecto.
- **jquery.html**: Página que utiliza jQuery para mostrar fotos de gatos.
- **estilos/**: Directorio que contiene los archivos CSS.
- **principal.css**: Archivo CSS principal que utiliza Tailwind CSS.
- **salida.css**: Archivo CSS generado por Tailwind CSS.
- **img/**: Directorio para imágenes (actualmente vacío).
- **js/**: Directorio que contiene los archivos JavaScript.
- **index.js**: Archivo JavaScript que maneja la lógica de la página principal.
- **jquery.js**: Archivo JavaScript que maneja la lógica de la página jQuery.

## Instalación

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Instala las dependencias con npm:

```sh
npm install
```

## Uso

### componentes flowbite que he usado
1. **Header Breadcrumb**: He utilizado el componente de breadcrumb en el header.

2. **Default Footer**: He utilizado el componente de footer por defecto de Tailwind CSS.

### Compilar CSS

Para compilar el CSS utilizando Tailwind CSS, ejecuta el siguiente comando:

```sh
npm run build:css
```

### Ejecutar el Proyecto

Abre `src/index.html` o `src/jquery.html` en tu navegador para ver la página web.

## Dependencias

- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [jQuery](https://jquery.com/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [PostCSS](https://postcss.org/)

## API

Este proyecto utiliza [The Cat API](https://thecatapi.com/) para obtener fotos de gatos.
