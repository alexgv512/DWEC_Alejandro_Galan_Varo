/**
 * @class
 * @classdesc Es una asignatura
 */
export class Asignatura {
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

    // json
    toJSON() {
        return {
            nombre: this.#nombre,
            estudiantes: this.#estudiantes.map(est => est.id)
        };
    }

    static fromJSON(json, estudiantes) {
        const asignatura = new Asignatura(json.nombre);
        asignatura.#estudiantes = json.estudiantes.map(id => estudiantes[id]);
        return asignatura;
    }
}