# Proyecto de Sistema de Gestión Académica

Este proyecto es un sistema de gestión académica desarrollado en JavaScript utilizando Webpack y Babel. Permite gestionar estudiantes, asignaturas y calificaciones.

## Estructura del Proyecto

```
.babelrc
.gitignore
package.json
webpack.config.js
img/
    Captura de pantalla 2025-03-03 134818.png
    Captura de pantalla 2025-03-03 134934.png
    Captura de pantalla 2025-03-03 135021.png
src/
    index.html
    main.js
    classes/
        Asignatura.js
        Direccion.js
        Estudiante.js
        Persona.js
        SistemaGestionAcademica.js
    utils/
        menu.js
```

## Instalación



1. Instala las dependencias:
    ```sh
   npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/polyfill html-webpack-plugin clean-webpack-plugin
    ```
2. Se crea al archivo .babelrc 

- Este esta configurado para soportar navegadores antiguos:
    ```jsonc
    {
        "presets": ["@babel/preset-env"]
    }
    ```

- El archivo `webpack.config.js` está configurado para generar un bundle compatible con navegadores antiguos:
    ```js
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
                template: '../src/index.html'
            })
        ],
        mode: 'production'
    };
    ```

## Despliegue en Netlify

1. Crea una cuenta en [Netlify](https://www.netlify.com/) si no tienes una.
2. Conecta tu repositorio de GitHub a Netlify.
3. Configura los ajustes de despliegue:
    - Build Command: `npm run build`
    - Publish Directory: `dist`
4. Despliega el proyecto.

## Verificación en Navegadores Antiguos con BrowserStack

1. Crea una cuenta en [BrowserStack](https://www.browserstack.com/) si no tienes una.
2. Inicia una sesión en BrowserStack.
3. Selecciona el navegador y la versión que deseas probar.
4. Ingresa la URL de tu proyecto desplegado en Netlify.
5. Verifica que el proyecto funcione correctamente en el navegador seleccionado.


## Resultados de la Prueba
Firefox 44![11111](img/Captura%20de%20pantalla%202025-03-03%20134818.png)
Chrome 62![22222](img/Captura%20de%20pantalla%202025-03-03%20134934.png)


CanIUse:JAVASCRIPT
CanIUse - ![33333](img/Captura%20de%20pantalla%202025-03-03%20135021.png)
