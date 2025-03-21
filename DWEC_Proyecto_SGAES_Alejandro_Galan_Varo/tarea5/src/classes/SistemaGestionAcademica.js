/**
 * @class
 * @classdesc Es un sistema de gestión académica
 */

import { Estudiante } from "./Estudiante.js";
import { Asignatura } from "./Asignatura.js";

export class SistemaGestionAcademica {
    
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
     * @returns {number} El promedio general de todos los estudiantes usando una implementación optimizada.
     * @description Calcula el promedio general de las calificaciones con un enfoque más eficiente.
     */
    promedioGeneral() {
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
        let reporteHTML = "<h3>Reporte de Estudiantes</h3>";
        for (const estudiante of Object.values(this.#estudiantes)) {
            reporteHTML += `
                <div>
                    <h4>Estudiante</h4>
                    <p>Id: ${estudiante.id}</p>
                    <p>Nombre: ${estudiante.nombre}</p>
                    <p>Edad: ${estudiante.edad}</p>
                    <p>Direccion: ${estudiante.direccion.toString()}</p>
                    <h5>Asignaturas</h5>
                    <ul>
            `;
            for (const [clave, valor] of Object.entries(estudiante.asignatura)) {
                reporteHTML += `<li>${clave}: ${valor}</li>`;
            }
            reporteHTML += `
                    </ul>
                    <p>Promedio: ${estudiante.promedio()}</p>
                </div>
            `;
        }
        return reporteHTML;
    }

    //json

    toJSON() {
        return {
            estudiantes: Object.values(this.#estudiantes).map(est => est.toJSON()),
            asignaturas: Object.values(this.#asignaturas).map(asig => asig.toJSON())
        };
    }

    static fromJSON(json) {
        const sistema = new SistemaGestionAcademica();
        const estudiantes = json.estudiantes.map(Estudiante.fromJSON);
        estudiantes.forEach(est => sistema.#estudiantes[est.id] = est);
        json.asignaturas.forEach(asigJson => {
            const asignatura = Asignatura.fromJSON(asigJson, sistema.#estudiantes);
            sistema.#asignaturas[asignatura.nombre] = asignatura;
        });
        return sistema;
    }
}