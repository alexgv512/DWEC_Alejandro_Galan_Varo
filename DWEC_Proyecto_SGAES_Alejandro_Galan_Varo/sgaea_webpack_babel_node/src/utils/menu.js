export function mostrarMenu() {
    const opciones = `
    1. Agregar estudiante
    2. Eliminar estudiante
    3. Agregar asignatura
    4. Eliminar asignatura
    5. Matricular estudiante en asignatura
    6. Desmatricular estudiante de asignatura
    7. Agregar calificación a estudiante
    8. Reporte de estudiantes
    9. Promedio general de estudiantes
    10. Buscar estudiante
    11. Salir
    `;
    console.log(opciones);
    const opcion = prompt("Selecciona una opción: ");
    return opcion;
}

export  {mostrarMenu as default};