# Título del Proyecto: Sistema de Gestión Académica

## Descripción
Este proyecto es un sistema de gestión académica simple que permite a los usuarios gestionar estudiantes y asignaturas. Incluye funcionalidades para agregar y eliminar estudiantes y asignaturas, inscribir estudiantes en asignaturas y generar informes sobre el rendimiento de los estudiantes.

## Estructura del Proyecto
El proyecto está organizado en los siguientes directorios y archivos:
tarea4.4
```
├── src
│   ├── classes
│   │   ├── Asignatura.js           
│   │   ├── Direccion.js             
│   │   ├── Estudiante.js           
│   │   ├── Persona.js             
│   │   └── SistemaGestionAcademica.js .
│   ├── main.js                    # Entry point of the application.
│   └── utils
│       └── menu.js                # Utility functions for menu display and user input handling.
├── package.json                    #
archivo configuracion npm.
└── README.md                       # 
```
## Proceso de Organización en Módulos

1. **Crear Directorios y Archivos:**
   - Organizamos las clases en el directorio `src/classes`.
   - Colocamos el archivo principal `main.js` en el directorio `src`.
   - Colocamos las funciones utilitarias en el directorio `src/utils`.

2. **Actualizar las Rutas de Importación:**
   - Asegúramos de que todas las rutas de importación en los archivos JavaScript estén actualizadas para reflejar la nueva estructura de directorios.

3. **Configurar JSDoc:**
   - Creamos un archivo `jsdoc.json` en el directorio raíz del proyecto con la siguiente configuración:

   ```json
   {
     "source": {
       "include": ["src"],
       "includePattern": ".js$",
       "exclude": ["node_modules"]
     },
     "opts": {
       "destination": "documentacion",
       "template": "node_modules/minami",
       "recurse": true,
       "private": true
     },
     "plugins": ["plugins/markdown"]
   }
   ```

4.**Actualizar package.json:**

   - Nos aseguramos de que el archivo package.json tenga el siguiente script para generar la documentación:

      ```json
      {
      "name": "dwec",
      "version": "1.0.0",
      "main": "index.js",
      "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "docum": "jsdoc -c jsdoc.json src -d documentacion -p"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "description": "",
      "devDependencies": {
         "jsdoc": "^4.0.4",
         "minami": "^1.2.3"
      },
      "dependencies": {
         "taffydb": "^2.7.3"
      }
      }
      ```
5.**Generar la Documentación:**
      Ejecuta el siguiente comando para generar la documentación:

   npm run docum

 ## Uso
 Ejecuta la aplicación:
   Sigue el menú en pantalla para interactuar con el sistema. Puedes agregar estudiantes, asignaturas, inscribir estudiantes en asignaturas y ver informes.

   Funcionalidades
   Agregar y eliminar estudiantes y asignaturas.
   Inscribir estudiantes en asignaturas.
   Agregar calificaciones para los estudiantes.
   Generar informes sobre el rendimiento de los estudiantes.
   Buscar estudiantes por nombre.