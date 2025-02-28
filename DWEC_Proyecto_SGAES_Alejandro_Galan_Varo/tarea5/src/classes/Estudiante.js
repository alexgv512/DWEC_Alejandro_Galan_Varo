import { Persona } from './Persona.js';// Importo la clase Persona
import { Direccion } from './Direccion.js';// Importo la clase Direccion
/**
 * @class
 * @classdesc Es un estudiante
 */
export class Estudiante extends Persona {
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

    //json
    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
            edad: this.edad,
            direccion: this.direccion,
            asignaturas: this.#asignaturas
        };
    }

    static fromJSON(json) {
        const direccion = Direccion.fromJSON(json.direccion);
        const estudiante = new Estudiante(json.id, json.nombre, json.edad, direccion);
        estudiante.#asignaturas = json.asignaturas;
        return estudiante;
    }
}