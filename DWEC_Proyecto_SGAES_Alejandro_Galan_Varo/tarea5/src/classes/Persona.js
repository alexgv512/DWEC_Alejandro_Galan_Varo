import { Direccion } from './Direccion.js';// Importo la clase Direccion
/**
 * @class
 * @classdesc Es una persona
 */
export class Persona {
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

    // json
    toJSON() {
        return {
            id: this.#id,
            nombre: this.#nombre,
            edad: this.#edad,
            direccion: this.#direccion
        }
    }
}