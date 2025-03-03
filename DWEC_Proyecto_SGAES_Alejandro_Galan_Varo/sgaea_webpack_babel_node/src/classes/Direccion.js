/**
 * @class
 * @classdesc Es la direccion de un estudiate
 */
export class Direccion {
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