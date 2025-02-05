/*
Enlace al repositorio de GitHub: https://github.com/alexgv512/DWEC_Alejandro_Galan_Varo
*/ 
/**
 * @class
 * @classdesc Es la direccion de un estudiate
 */
class Direccion {
    /**
     * @type {String}
     * @private
     * @description **Calle** de la dirección. Tiene getter.
     */
    #calle;

    /**
     * @type {String}
     * @private
     * @description **Número** de la dirección. Tiene getter.
     */
    #numero;

    /**
     * @type {String}
     * @private
     * @description **Piso** de la dirección. Tiene getter.
     */
    #piso;

    /**
     * @type {String}
     * @private
     * @description **Código postal** de la dirección. Tiene getter.
     */
    #codigoPostal;

    /**
     * @type {String}
     * @private
     * @description **Provincia** de la dirección. Tiene getter.
     */
    #provincia;

     /**
     * @type {String}
     * @private
     * @description **Localidad** de la dirección. Tiene getter.
     */
    #localidad;


    /**
     * @constructor
     * @param {String} calle Calle de la dirección
     * @param {String} numero Número de la dirección
     * @param {String} piso Piso de la dirección
     * @param {String} codigoPostal Código postal de la dirección
     * @param {String} provincia Provincia de la dirección
     * @param {String} localidad Localidad de la dirección
     * @description Crea una **dirección** con los datos proporcionados.
     * - Se valida el código postal (5 números).
     * - Si no es válido, se establecerá como `"00000"`.
     * @see #calle
     * @see #numero
     * @see #piso
     * @see #codigoPostal
     * @see #provincia
     * @see #localidad
     */
    constructor(calle, numero, piso, codigoPostal, provincia, localidad) { //Constructor de la clase Direccion

        this.#calle = calle || "Desconocida";
        this.#numero = numero || 0;
        this.#piso = piso || "Bajo";
        this.#codigoPostal = codigoPostal;
        this.#provincia = provincia || "Desconocida";
        this.#localidad = localidad || "Desconocida";

        if (codigoPostal.length != 5 || !/[0-9]/.test(codigoPostal)) {
            this.#codigoPostal = "00000";
        }
    }


    /**
     * @type {String}
     * @description Getter de la calle de la dirección.
     * @see #calle
     */
    get calle(){
        return this.#calle;
    }

    /**
     * @type {String}
     * @description Getter del número de la dirección.
     * @see #numero
     */
    get numero(){
        return this.#numero;
    }

    /**
     * @type {String}
     * @description Getter del piso de la dirección.
     * @see #piso
     */
    get piso(){
        return this.#piso;
    }

    /**
     * @type {String}
     * @description Getter del código postal de la dirección.
     * @see #codigoPostal
     */
    get codigoPostal(){
        return this.#codigoPostal;
    }

    /**
     * @type {String}
     * @description Getter de la provincia de la dirección.
     * @see #provincia
     */
    get provincia(){
        return this.#provincia;
    }

    /**
     * @type {String}
     * @description Getter de la localidad de la dirección.
     * @see #localidad
     */

    get localidad(){
        return this.#localidad;
    }

    /**
     * @function
     * @override
     * @returns {String} Dirección completa.
     * @description Devuelve la dirección completa.
     * @example "Calle piscolabis 3, bajo - 18110 Las Gabias (Granada)"
     */
    toString(){
        return this.#calle + " " + this.#numero + ", " + this.#piso + " - " + this.#codigoPostal + " " + this.#localidad + " (" + this.#provincia + ")";
    }
}

/**
 * @class
 * @classdesc Es una persona
 */
class Persona {
    /**
     * @type {String}
     * @private
     * @description **identificador** de la  persona tiene getter
     */
    #id;

    /**
     * @type {String}
     * @private
     * @description **nombre** de la persona 
     */
    #nombre;
     /**
     * @type {String}
     * @private
     * @description **edad** de la persona 
     */
    #edad;
    /**
     * @type {String}
     * @private
     * @description **direccion** de la persona 
     */
    #direccion; 
    
    constructor(id, nombre, edad, direccion) {// Constructor de la clase Persona
        
        if (!/^[a-zA-Z\s]+$/.test(nombre)) {// compruebo si el nombre es valido
            throw new Error("El nombre debe contener solo letras y espacios.");
        }
        this.#nombre = nombre;
        this.#id = id;
        this.#edad = edad;
        this.#direccion = direccion;
    }

/**
 * @type {Number}
 * @description Getter del **ID único** de la persona.
 * @see #id
 */
    get id() {
        return this.#id;
    }

    /**
     * @type {String}
     * @description Getter del **nombre** de la persona.
     * @see #nombre
     */
    get nombre() {
        return this.#nombre;
    }

    /**
     * @type {Number}
     * @description Getter de la **edad** de la persona.
     * @see #edad
     */
    get edad() {
        return this.#edad;
    }

    /**
     * @type {String}
     * @description Getter de la **dirección** de la persona como texto.
     * @see #direccion
     */
    get direccion() {
        return this.#direccion.toString();
    }

    /**
     * @type {String}
     * @description Setter del **nombre** de la persona.
     * @param {String} nombre Nuevo nombre de la persona.
     * @see #nombre
     */
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    /**
     * @type {Number}
     * @description Setter de la **edad** de la persona.
     * @param {Number} edad Nueva edad de la persona.
     * @see #edad
     */
    set edad(edad) {
        this.#edad = edad;
    }

    /**
     * @type {Direccion}
     * @description Setter de la **dirección** de la persona.
     * @param {Direccion} direccion Nueva dirección de la persona.
     * @see #direccion
     */
    set direccion(direccion) {
        this.#direccion = direccion;
    }
}

/**
 * @class
 * @classdesc Es un estudiante
 */
class Estudiante extends Persona {
    /**
     * @type {Object}
     * @private
     * @description **Asignaturas** del estudiante. Cada clave es el nombre de la asignatura, y el valor es un array de calificaciones.
     */
    #asignaturas;
    
    constructor(id, nombre, edad, direccion) {// Constructor de la clase Estudiante
        super(id, nombre, edad, direccion);
        this.#asignaturas = [];//asignaturas del estudiante, clave: nombre de la asignatura, valor: calificaciones 
    }

     /**
     * @type {Object}
     * @description Getter de las **asignaturas** del estudiante.
     * @returns {Object} Devuelve el objeto con las asignaturas y sus calificaciones.
     */ 
    get asignatura(){
        return this.#asignaturas
    }

     /**
     * @function
     * @param {Object} asignatura Asignatura en la que se desea matricular al estudiante.
     * @description Matricula al estudiante en una asignatura si no está ya matriculado.
     * - Añade la asignatura al objeto de asignaturas del estudiante.
     * - Agrega al estudiante a la lista de estudiantes de la asignatura.
     * @example estudiante.matricularAsignatura(asignatura);
     */
    matricularAsignatura(asignatura) {// Matricular asignatura
        const fechaMatriculacion = new Intl.DateTimeFormat('es-Es',{dateStyle: 'long'}).format(new Date());// Obtengo la fecha actual

        if (!this.#asignaturas[asignatura.nombre]) {// Compruebo si la asignatura está en el objeto asignaturas
            this.#asignaturas[asignatura.nombre] = [];// Si no, lo añado
            asignatura.estudiantes.push(this);// Añado el estudiante a la lista de estudiantes de la asignatura
            console.log("Estudiante " + this.nombre + " matriculado en " + asignatura.nombre + " el " + fechaMatriculacion );
        } else {
            console.log("El estudiante " + this.nombre + " ya está matriculado en " + asignatura.nombre);
        }
    }

    /**
     * @function
     * @param {Object} asignatura Asignatura de la que se desea desmatricular al estudiante.
     * @description Desmatricula al estudiante de una asignatura si está matriculado.
     * - Elimina la asignatura del objeto de asignaturas del estudiante.
     * - Retira al estudiante de la lista de estudiantes de la asignatura.
     * @example estudiante.desmatricularAsignatura(asignatura);
     */
    desmatricularAsignatura(asignatura) {// Desmatricular asignatura
        const fechaDesmatriculacion = new Intl.DateTimeFormat('es-Es',{dateStyle: 'long'}).format(new Date()); // Obtengo la fecha actual

        if (this.#asignaturas[asignatura.nombre]) {// Compruebo si la asignatura está en el objeto asignaturas
            delete this.#asignaturas[asignatura.nombre];// Si es así, lo elimino 
            const index = asignatura.estudiantes.indexOf(this);// Obtengo el índice de estudiante en la lista de estudiantes de la asignatura
            if (index !== -1) {// Compruebo si el estudiante está en la lista de estudiantes de la asignatura
                asignatura.estudiantes.splice(index, 1);// Elimino el estudiante de la lista de estudiantes de la asignatura
            }
            console.log("Estudiante " + this.nombre + " desmatriculado de " + asignatura.nombre + " el " + fechaDesmatriculacion);
        } else {
            console.log("El estudiante " + this.nombre + " no está matriculado en " + asignatura.nombre);
        }
    }

    /**
     * @function
     * @param {Object} asignatura Asignatura a la que se agregará la calificación.
     * @param {Number} calificacion Calificación a añadir. Debe estar entre 0 y 10.
     * @description Agrega una calificación a una asignatura del estudiante si está matriculado y la calificación es válida.
     * @example estudiante.agregarCalificacion(asignatura, 8.5);
     */
    agregarCalificacion(asignatura, calificacion) {// Agregar calificacion
        if (calificacion >= 0 && calificacion <= 10) {// Compruebo si la calificación es válida
            if (this.#asignaturas[asignatura.nombre]) {// Compruebo si la asignatura está en el objeto asignaturas
                this.#asignaturas[asignatura.nombre].push(calificacion);// Si es así, lo añado
                console.log("Calificación " + calificacion + " agregada a " + this.nombre + " en " + asignatura.nombre);
            } else {
                console.log("El estudiante " + this.nombre + " no está matriculado en " + asignatura.nombre);
            }
        } else {
            console.log("Calificación no válida. Debe estar entre 0 y 10.");
        }
    }

    /**
     * @function
     * @returns {Number} Promedio de todas las calificaciones del estudiante.
     * @description Calcula el promedio de las calificaciones del estudiante en todas las asignaturas.
     * - Si no hay calificaciones, devuelve 0.
     * @example const promedio = estudiante.promedio();
     */

    promedio() { // Promedio de la calificación de cada asignatura
        let totalCalificaciones = 0;
        let numeroCalificaciones = 0;

        for (const calificaciones of Object.values(this.#asignaturas)) {// Recorro cada asignatura
            totalCalificaciones += calificaciones.reduce((total, cal) => total + cal, 0); // calculo el total de la suma de las calificaciones de todas las asignaturas
            numeroCalificaciones += calificaciones.length;//calculo el total de la cantidad de asignaturas
        }
        if (numeroCalificaciones > 0) {
            return totalCalificaciones / numeroCalificaciones; // calculo el promedio
        } else {
            return 0;
        }
    }
}
  
/**
 * @class
 * @classdesc Es una asignatura
 */
class Asignatura {
    /**
     * @type {String}
     * @private
     * @description **Nombre** de la asignatura. Tiene getter.
     */
    #nombre;

    /**
     * @type {Array<Estudiante>}
     * @private
     * @description **Lista de estudiantes** matriculados en la asignatura. Cada elemento es un objeto de tipo `Estudiante`.
     */
    #estudiantes;

    /**
     * @constructor
     * @param {String} nombre Nombre de la asignatura. Solo se permiten letras, números romanos y espacios.
     * @throws {Error} Si el nombre de la asignatura no cumple con el formato válido.
     * @description Crea una **asignatura** con un nombre y una lista vacía de estudiantes.
     */
    constructor(nombre) {
        
        if (!/^[a-zA-Z\sIVXLCDM]+$/.test(nombre)) {// Compruebo si el nombre de la asignatura es valido
            throw new Error("El nombre de la asignatura debe contener solo letras, números romanos y espacios.");
        }
        this.#nombre = nombre;
        this.#estudiantes = [];
    }

    /**
     * @type {String}
     * @description Getter del **nombre** de la asignatura.
     * @returns {String} Devuelve el nombre de la asignatura.
     */
    get nombre() {
        return this.#nombre;
    }

    /**
     * @type {Array<Estudiante>}
     * @description Getter de los **estudiantes** matriculados en la asignatura.
     * @returns {Array<Estudiante>} Devuelve un array con los estudiantes matriculados.
     */
    get estudiantes(){
        return this.#estudiantes;
    }

    /**
     * @function
     * @returns {Number} Promedio de las calificaciones de los estudiantes en esta asignatura.
     * @description Calcula el promedio de las calificaciones de todos los estudiantes matriculados en la asignatura.
     * - Si no hay calificaciones, devuelve 0.
     * @example const promedio = asignatura.promedio();
     */
    promedio() {
        let totalCalificaciones = 0;
        let numeroCalificaciones = 0;

        for (const estudiante of this.#estudiantes) {// Recorro cada estudiante
            const calificaciones = estudiante.asignaturas[this.#nombre]; // Obtengo las calificaciones de la asignatura
            totalCalificaciones += calificaciones.reduce((total, cal) => total + cal, 0);// Calculo el total de la suma de las calificaciones de cada estudiante
            numeroCalificaciones += calificaciones.length;// Calculo el total de la cantidad de estudiantes
        }
        if (numeroCalificaciones > 0) {
            return totalCalificaciones / numeroCalificaciones;//    calculo el promedio
        } else {
            return 0;
        }
    }

    /**
     * @function
     * @override
     * @returns {String} Información de la asignatura en formato texto.
     * @description Devuelve un string que describe la asignatura con su nombre y promedio de calificaciones.
     * @example const info = asignatura.toString();
     */
    toString() {
        return `Asignatura: ${this.#nombre}, Promedio: ${this.promedio().toFixed(2)}`;
    }
}


/**
 * @class
 * @classdesc Es un sistema de gestión académica
 */
class SistemaGestionAcademica {
    /**
     * @type {Object.<number, Estudiante>}
     * @private
     * @description Almacena los estudiantes del sistema. La clave es el ID del estudiante y el valor es un objeto de tipo `Estudiante`.
     */
    #estudiantes;

    /**
     * @type {Object.<string, Asignatura>}
     * @private
     * @description Almacena las asignaturas del sistema. La clave es el nombre de la asignatura y el valor es un objeto de tipo `Asignatura`.
     */
    #asignaturas;

    /**
     * @constructor
     * @description Inicializa el sistema con listas vacías de estudiantes y asignaturas.
     */
    constructor() {// constructor de la clase
        this.#estudiantes = {};//estudiantes del sistema, clave: id del estudiante, valor: objeto Estudiante
        this.#asignaturas = {};//asignaturas del sistema, clave: nombre de la asignatura, valor: objeto Asignatura
    }

    /**
     * @function
     * @returns {Object.<number, Estudiante>} Devuelve todos los estudiantes del sistema.
     */
    obtenerEstudiantes() {
        return this.#estudiantes;
    }

    /**
     * @function
     * @returns {Object.<string, Asignatura>} Devuelve todas las asignaturas del sistema.
     */
    obtenerAsignaturas() {    
        return this.#asignaturas;
    }

     /**
     * @function
     * @param {Estudiante} estudiante Estudiante a agregar al sistema.
     * @description Agrega un estudiante al sistema, validando que el ID no esté duplicado.
     */
    agregarEstudiante(estudiante) { // agregar estudiante
        if (!this.#estudiantes[estudiante.id]) {// si no existe el estudiante
            this.#estudiantes[estudiante.id] = estudiante;// agregarlo
            console.log("Estudiante " + estudiante.nombre + " agregado.");
        } else {
            console.log("Estudiante con este ID ya existe.");
        }
    }

    /**
     * @function
     * @param {number} idEstudiante ID del estudiante a eliminar.
     * @description Elimina un estudiante del sistema.
     */
    eliminarEstudiante(idEstudiante) {// eliminar estudiante
        if (this.#estudiantes[idEstudiante]) {// si existe el estudiante
            delete this.#estudiantes[idEstudiante];// lo elimino
            console.log("Estudiante con ID " + idEstudiante + " eliminado.");
        } else {
            console.log("Estudiante no encontrado.");
        }
    }

    /**
     * @function
     * @param {Asignatura} asignatura Asignatura a agregar al sistema.
     * @description Agrega una asignatura al sistema, validando que el nombre no esté duplicado.
     */
    agregarAsignatura(asignatura) {// añadir asinatura
        if (!this.#asignaturas[asignatura.nombre]) {// si no existe la asignatura
            this.#asignaturas[asignatura.nombre] = asignatura;// la añado 
            console.log("Asignatura " + asignatura.nombre + " agregada.");
        } else {
            console.log("Asignatura ya existe.");
        }
    }

    /**
     * @function
     * @param {string} nombreAsignatura Nombre de la asignatura a eliminar.
     * @description Elimina una asignatura del sistema y desmatricula a todos los estudiantes de ella.
     */
    eliminarAsignatura(nombreAsignatura) {// eliminar asignatura
        if (this.#asignaturas[nombreAsignatura]) {// si existe la asignatura
           
            //desmatriculo todos los estudiantes de la asignatura
            for (const estudiante of this.#asignaturas[nombreAsignatura].estudiantes) {// Recorro cada estudiante
                estudiante.desmatricularAsignatura(this.#asignaturas[nombreAsignatura]);// desmatriculo
            }

            delete this.#asignaturas[nombreAsignatura];// la elimino
            console.log("Asignatura " + nombreAsignatura + " eliminada.");
        } else {
            console.log("Asignatura no encontrada.");
        }
    }

    /**
     * @function
     * @returns {number} El promedio general de todos los estudiantes.
     * @description Calcula el promedio general de las calificaciones de todos los estudiantes.
     */
    promedioGeneral() {// Promedio general de los estudiantes 
        let totalPromedio = 0;
        let numeroEstudiantes = 0;

        for (const estudiante of Object.values(this.#estudiantes)) {// Recorro cada estudiante
            totalPromedio += estudiante.promedio();// calculo el promedio
            numeroEstudiantes++;// incremento el numero de estudiantes
        }
        if (numeroEstudiantes > 0) {// si hay estudiantes
            return totalPromedio / numeroEstudiantes;// calculo el promedio general
        } else {
            return 0;
        }
    }

    /**
     * @function
     * @returns {number} El promedio general de todos los estudiantes usando una implementación optimizada.
     * @description Calcula el promedio general de las calificaciones con un enfoque más eficiente.
     */
    promedioGeneralMejorado() {
        if (Object.values(this.#estudiantes).length == 0) {// si no hay estudiantes
            return 0;
        }
        let promedio = Object.values(this.#estudiantes).reduce((suma, estudiante) => suma + estudiante.promedio(), 0);// sumo el promedio de todos los estudiantes
        
        return promedio / Object.values(this.#estudiantes).length;// calculo el promedio general

    }

    /**
     * @function
     * @param {string} patron Patrón de búsqueda en el nombre de los estudiantes.
     * @returns {Estudiante[]} Lista de estudiantes cuyo nombre coincide con el patrón.
     * @description Busca estudiantes cuyos nombres coincidan con un patrón.
     */
    buscarEstudiante(patron) {
        const resultado = [];
        const regex = new RegExp(patron, 'i'); // Crea la expresión regular con el patrón y flag 'i' para ignorar mayúsculas/minúsculas

        for (const estudiante of Object.values(this.#estudiantes)) {
            if (regex.test(estudiante.nombre)) { // Verifica si el nombre del estudiante coincide con el patrón
                resultado.push(estudiante);
            }
        }

        return resultado;
    }
    
    /**
     * @function
     * @description Genera un reporte con los datos de todos los estudiantes, sus asignaturas y calificaciones.
     */
    reporteEstudiantes() {
        console.log("Reporte:");
        for (const estudiante of Object.values(this.#estudiantes)) { // Recorro cada estudiante
            console.log("--- Estudiante ---");
            console.log("Id: " + estudiante.id);
            console.log("Nombre: " + estudiante.nombre);
            console.log("Edad: " + estudiante.edad);
            console.log("Direccion: " +estudiante.direccion.toString());
          
            // Usamos el getter asignatura para acceder a las asignaturas
            for (const [clave, valor] of Object.entries(estudiante.asignatura)) {
                console.log(clave, valor);
            }
           console.log("Promedio: " + estudiante.promedio());
        }
    }
}

/**
 * @module
 * @description Módulo principal de la aplicación.
 */


const direccion1 = new Direccion("Calle Falsa", 123, "Piso 1", "28080", "Madrid", "Madrid");
const direccion2 = new Direccion("Av. Siempre Viva", 742, "Bajo", "28080", "Madrid", "Madrid");


const sistema = new SistemaGestionAcademica();


const estudiante1 = new Estudiante(1, "Juan Perez", 20, direccion1);
const estudiante2 = new Estudiante(2, "Ana Gomez", 22, direccion2);
const estudiante3 = new Estudiante(3, "Alex Galan", 20, direccion1);

sistema.agregarEstudiante(estudiante1);
sistema.agregarEstudiante(estudiante2);
sistema.agregarEstudiante(estudiante3);



const asignatura1 = new Asignatura("Matematicas I");
const asignatura2 = new Asignatura("Historia II" );
const asignatura3 = new Asignatura("Ingles");
const asignatura4 = new Asignatura("PE");

sistema.agregarAsignatura(asignatura1);
sistema.agregarAsignatura(asignatura2);
sistema.agregarAsignatura(asignatura3);
sistema.agregarAsignatura(asignatura4);

// Matricular estudiantes
estudiante1.matricularAsignatura(asignatura1);
estudiante2.matricularAsignatura(asignatura1);
estudiante1.matricularAsignatura(asignatura2);
estudiante1.matricularAsignatura(asignatura3);

// Agregar calificaciones
estudiante1.agregarCalificacion(asignatura1, 8);
estudiante1.agregarCalificacion(asignatura1, 7);
estudiante2.agregarCalificacion(asignatura1, 9);


// Mostrar reporte
console.log("Reporte de estudiantes:");
sistema.reporteEstudiantes();

// Promedio general
console.log("Promedio general de todos los estudiantes: " + sistema.promedioGeneral().toFixed(2));

console.log("Promedio general Mejorado de todos los estudiantes: " + sistema.promedioGeneralMejorado().toFixed(2));


function mostrarMenu() {
    console.log("\n--- MENÚ PRINCIPAL ---");
    console.log("1. Agregar Estudiante");
    console.log("2. Eliminar Estudiante");
    console.log("3. Agregar Asignatura");
    console.log("4. Eliminar Asignatura");
    console.log("5. Matricular Estudiante en Asignatura");
    console.log("6. Desmatricular Estudiante de Asignatura");
    console.log("7. Agregar Calificación a Estudiante");
    console.log("8. Ver Reporte de Estudiantes");
    console.log("9. Ver Promedio General de Estudiantes");
    console.log("10. Buscar Estudiantes");
    console.log("11. Salir");
    return prompt("Selecciona una opción: ");
}

let salir = false;
do {
    try {
        const opcion = mostrarMenu();
        switch(opcion) {
            case '1': {
                const id = prompt("Introduce el ID del estudiante: ");
                const nombre = prompt("Introduce el nombre del estudiante: ");
                const edad = prompt("Introduce la edad del estudiante: ");
                const calle = prompt("Introduce la calle: ");
                const numero = prompt("Introduce el número: ");
                const piso = prompt("Introduce el piso: ");
                const codigoPostal = prompt("Introduce el código postal: ");
                const provincia = prompt("Introduce la provincia: ");
                const localidad = prompt("Introduce la localidad: ");
                const direccion = new Direccion(calle, numero, piso, codigoPostal, provincia, localidad);
                const estudiante = new Estudiante(id, nombre, edad, direccion);
                sistema.agregarEstudiante(estudiante);
                break;
            }
            case '2': {
                const id = prompt("Introduce el ID del estudiante a eliminar: ");
                if (!id) throw new Error("El ID del estudiante es obligatorio.");
                sistema.eliminarEstudiante(id);
                break;
            }
            case '3': {
                const nombre = prompt("Introduce el nombre de la asignatura: ");
                if (!nombre) throw new Error("El nombre de la asignatura es obligatorio.");
                const asignatura = new Asignatura(nombre);
                sistema.agregarAsignatura(asignatura);
                break;
            }
            case '4': {
                const nombreAsignatura = prompt("Introduce el nombre de la asignatura a eliminar: ");
                if (!nombreAsignatura) throw new Error("El nombre de la asignatura es obligatorio.");
                const asignaturas = sistema.obtenerAsignaturas();
                if (!asignaturas[nombreAsignatura]) {
                    throw new Error(`La asignatura ${nombreAsignatura} no existe en el sistema.`);
                }
                sistema.eliminarAsignatura(nombreAsignatura);
                break;
            }
            case '5': { 
                const id = prompt("Introduce el ID del estudiante: ");
                const nombreAsignatura = prompt("Introduce el nombre de la asignatura: ");
                if (!id || !nombreAsignatura) throw new Error("Ambos, ID del estudiante y nombre de la asignatura son obligatorios.");
                const estudiantes = sistema.obtenerEstudiantes();
                const asignaturas = sistema.obtenerAsignaturas();

                const estudiante = estudiantes[id];
                const asignatura = asignaturas[nombreAsignatura];

                if (!estudiante) throw new Error(`Estudiante con ID ${id} no encontrado.`);
                if (!asignatura) throw new Error(`Asignatura ${nombreAsignatura} no encontrada.`);
                estudiante.matricularAsignatura(asignatura);
                console.log(`Estudiante con ID ${id} matriculado en ${nombreAsignatura}.`);
                break;
            }
            case '6': {
                const id = prompt("Introduce el ID del estudiante: ");
                const nombreAsignatura = prompt("Introduce el nombre de la asignatura: ");
                if (!id || !nombreAsignatura) throw new Error("Ambos, ID del estudiante y nombre de la asignatura son obligatorios.");
                const estudiantes = sistema.obtenerEstudiantes();
                const asignaturas = sistema.obtenerAsignaturas();

                const estudiante = estudiantes[id];
                const asignatura = asignaturas[nombreAsignatura];

                if (!estudiante) throw new Error(`Estudiante con ID ${id} no encontrado.`);
                if (!asignatura) throw new Error(`Asignatura ${nombreAsignatura} no encontrada.`);
                estudiante.desmatricularAsignatura(asignatura);
                console.log(`Estudiante con ID ${id} desmatriculado de ${nombreAsignatura}.`);
                break;
            }
            case '7': {
                const id = prompt("Introduce el ID del estudiante: ");
                const nombreAsignatura = prompt("Introduce el nombre de la asignatura: ");
                const calificacion = parseFloat(prompt("Introduce la calificación: "));
                if (!id || !nombreAsignatura || isNaN(calificacion)) throw new Error("El ID del estudiante, nombre de la asignatura y calificación son obligatorios.");
                const estudiantes = sistema.obtenerEstudiantes();
                const asignaturas = sistema.obtenerAsignaturas();

                const estudiante = estudiantes[id];
                const asignatura = asignaturas[nombreAsignatura];

                if (!estudiante) throw new Error(`Estudiante con ID ${id} no encontrado.`);
                if (!asignatura) throw new Error(`Asignatura ${nombreAsignatura} no encontrada.`);
                estudiante.agregarCalificacion(asignatura, calificacion);
                console.log(`Estudiante con ID ${id} se le ha añadido la calificación de ${calificacion} en ${nombreAsignatura}.`);
                break;
            }
            case '8': {
                sistema.reporteEstudiantes();
                break;
            }
            case '9': {
                console.log("Promedio general de todos los estudiantes: " + sistema.promedioGeneral().toFixed(2));
                break;
            }
            case '10': {
                console.log("Buscar estudiante");
                const patron = prompt("Introduce el patrón de búsqueda del nombre del estudiante: ");
                if (!patron) throw new Error("El patrón de búsqueda es obligatorio.");
                const estudiantesEncontrados = sistema.buscarEstudiante(patron);
                
                if (estudiantesEncontrados.length > 0) {
                    console.log("Estudiantes encontrados:");
                    estudiantesEncontrados.forEach(estudiante => {
                        console.log(`ID: ${estudiante.id}, Nombre: ${estudiante.nombre}, Dirección: ${estudiante.direccion}`);
                    });
                } else {
                    console.log("No se encontraron estudiantes con ese patrón.");
                }
                break;
            }
            case '11': {
                console.log("¡Hasta pronto!");
                salir = true;
                break;
            }
            default:
                throw new Error("Opción no válida.");
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
} while (!salir);
