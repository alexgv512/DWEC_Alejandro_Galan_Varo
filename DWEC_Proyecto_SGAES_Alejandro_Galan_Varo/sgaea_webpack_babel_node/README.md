# Sistema de Gestión Académica de Estudiantes y Asignaturas

Este proyecto es un Sistema de Gestión Académica desarrollado por mí, Adrián Martín Vázquez. Proporciona gestión de registros de estudiantes y asignaturas, incluyendo la creación, eliminación y matriculación de estudiantes.

## Configuración del Entorno

### Requisitos

- Node.js en tu equipo
- npm (para los comandos)

### Mi Proyecto

#### Instalación


2. Instala las dependencias del proyecto:

   ```sh
   npm install
   ```

### Práctica

#### Instalación Práctica

1. Crea una nueva carpeta para tu proyecto y navega a ella:

   ```sh
   mkdir tu_proyecto_sgaea

   cd tu_proyecto_sgaea
   ```
2. Inicializa un nuevo proyecto de Node.js:

   ```sh
   npm init -y
   ```
3. Instala las dependencias necesarias:

   ```sh
   npm install --save-dev @babel/core @babel/polyfill @babel/preset-env babel-loader clean-webpack-plugin html-webpack-plugin webpack webpack-cli webpack-dev-server
   ```
4. Crea los archivos de configuración siguientes, a continuación introduciremos su información:

   - [webpack.config.js](http://_vscodecontentref_/1)
   - [.babelrc](http://_vscodecontentref_/2)

### Configuración de Webpack y Babel

El proyecto utiliza Webpack para la construcción y Babel para la transpilación del código en JS moderno que es el que se utiliza actualmente y el que usaremos en esta guía.

- El archivo de configuración de Webpack contiene la siguiente información:

```sh
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
entry: ['@babel/polyfill', './src/main.js'],
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
},
module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader'
        }
    },
    {
        test: /\.ttf$/,
        type: 'asset/resource'
    }
    ]
},
plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
    template: './index.html'
    })
],
mode: 'production'
};
```

- La configuración de Babel contiene la siguiente información:

```sh
{
    "presets": ["@babel/preset-env"]
}
```

### Comando para compilar

`npm run build`: Construye el proyecto para producción, en concreto te creara un nuevo directorio llamado dist donde se encontrara el archivo de construcción build.js y el index.html que será el que se ejecutará para la transpilación del código.

## Subir el Código al Proveedor de Hosting Netlify

1. Construye el proyecto para producción como hemos visto antes:

   ```sh
   npm run build
   ```
2. Como usaremos Netlify por su facilidad de dominio gratis y que nuestro código no es tan, entraremos en su sitio web y nos registramos con nuestra cuenta de Github a ser posible
3. Clicamos en Import from Git para importar nuestro proyecto que tendremos en un repositorio en nuestro Github
4. Luego, decimos el nombre que tendrá nuestro dominio junto con la extension gratuita netlify.app
5. Decimos el comando que usará para contruir el proyecto para producción que ya hemos dicho antes que es npm run build, además de decir que la carpeta que se usará es la dist
6. Con eso hecho, se empezara a crear nuestra página, una vez terminado el proceso ya podremos entrar dentro del enlace que aparecerá aunque ya lo sabemos que es: NombreQueHasPuesto.netlify.app

## Probar el Código

Una vez dentro de la página para probar el código, abre la consola de desarrollador en tu navegador (F12) y navega a la pestaña de "Consola" para ver el programa ejecutarse que iremos moviendonos mediante notificaciones que aparecen como pop ups en pantalla.

## Uso de Browserstack para navegadores antiguos

1. Para ello tenemos que iniciar sesión o crear una cuenta
2. Omitir o decir para que lo usaremos
3. Pasar el enlace URL que nos da Netlify de nuestro dominio para que se lo demos a browserstack y probemos en demás navegadores
4. Elegir por sistema operativo la versión de navegadores disponibles que nos proporciona

   En la siguiente sección mostraré 3 pruebas que hice en la versión que ví más antigua en algunos navegadores (Microsoft Edge, Firefox, Chrome)

## Resultados de la Prueba

1. Firefox 44
   ![11111](img/Captura%20de%20pantalla%202025-03-03%20134818.png)
2. Chrome 62
   ![22222](img/Captura%20de%20pantalla%202025-03-03%20134934.png)


CanIUse:		   JAVASCRIPT
CanIUse - ![33333](img/Captura%20de%20pantalla%202025-03-03%20135021.png) 