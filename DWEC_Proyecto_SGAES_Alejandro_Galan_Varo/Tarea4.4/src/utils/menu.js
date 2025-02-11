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

export  {mostrarMenu as default};