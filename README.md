# Explicacion tarea 4.3 JSDOC

### 1. Instalación de Node.js y JSDoc

1. Descarga e instala Node.js desde su [sitio oficial](https://nodejs.org/).
2. Instala JSDoc de manera global ejecutando el siguiente comando en la terminal:

```bash
npm install -g jsdoc
```

### 2. Añadir Comentarios Usando JSDoc

Se añadieron comentarios siguiendo la sintaxis de JSDoc al código existente.

#### Documentar el codigo
`

### 3. Crear un Script npm para Automatizar JSDoc

Se añadió un script en el archivo `package.json` para ejecutar JSDoc fácilmente:

```json
{
  "scripts": {
    "docs": "jsdoc -c jsdoc.json -r ./src -d ./docs"
  }
}
```

Para generar la documentación, basta con ejecutar:

```bash
npm run docs
```

### 4. Generar Documentación

1. Escribe comentarios JSDoc en el código fuente.

2. Crea un archivo de configuración `jsdoc.json`:



3. Ejecuta el script npm creado para generar la documentación:

```bash
npm run docs
```

La documentación se generará en la carpeta `docs` en formato HTML.


