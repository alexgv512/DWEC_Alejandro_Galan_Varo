// src/main.js
// arreglar imports en las clases para que funciones funcionen correctamente

import { SistemaGestionAcademica } from './classes/SistemaGestionAcademica.js';
import { Estudiante } from './classes/Estudiante.js';
import { Asignatura } from './classes/Asignatura.js';
import { Direccion } from './classes/Direccion.js';
import { mostrarMenu } from './utils/menu.js';

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
const asignatura2 = new Asignatura("Historia II");
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