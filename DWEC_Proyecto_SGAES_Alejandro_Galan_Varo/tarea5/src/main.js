import { Asignatura } from './classes/Asignatura.js';
import { Direccion } from './classes/Direccion.js';
import { Estudiante } from './classes/Estudiante.js';
import { SistemaGestionAcademica } from './classes/SistemaGestionAcademica.js';

const sistema = new SistemaGestionAcademica();

function guardarEnLocalStorage() {
    try {
        localStorage.setItem('sistema', JSON.stringify(sistema.toJSON()));
        console.log('Datos guardados en localStorage');
    } catch (error) {
        console.error('Error al guardar en localStorage:', error);
    }
}

function cargarDesdeLocalStorage() {
    try {
        const sistemaGuardado = localStorage.getItem('sistema');
        if (sistemaGuardado) {
            Object.assign(sistema, SistemaGestionAcademica.fromJSON(JSON.parse(sistemaGuardado)));
            console.log('Datos cargados desde localStorage');
        }
    } catch (error) {
        console.error('Error al cargar desde localStorage:', error);
    }
}

// Cargar datos desde localStorage al iniciar
cargarDesdeLocalStorage();

function mostrarMensaje(elementId, mensaje, tipo) {
    const elemento = document.getElementById(elementId);
    elemento.textContent = mensaje;
    elemento.className = tipo; // 'success-message' o 'error-message'
}

// Validación de formularios
document.addEventListener('DOMContentLoaded', () => {
    const forms = [
        { form: 'formAgregarEstudiante', error: 'errorAgregarEstudiante' },
        { form: 'formEliminarEstudiante', error: 'errorEliminarEstudiante' },
        { form: 'formAgregarAsignatura', error: 'errorAgregarAsignatura' },
        { form: 'formEliminarAsignatura', error: 'errorEliminarAsignatura' },
        { form: 'formMatricularEstudiante', error: 'errorMatricularEstudiante' },
        { form: 'formDesmatricularEstudiante', error: 'errorDesmatricularEstudiante' },
        { form: 'formAsignarCalificacion', error: 'errorAsignarCalificacion' },
        { form: 'formReporteEstudiantes', error: 'errorReporteEstudiantes' },
        { form: 'formPromedioGeneral', error: 'errorPromedioGeneral' }
    ];

    forms.forEach(({ form, error }) => {
        const formElement = document.getElementById(form);
        const errorElement = document.getElementById(error);

        formElement.addEventListener('submit', (event) => {
            if (!formElement.checkValidity()) {
                event.preventDefault();
                errorElement.textContent = 'Por favor, complete todos los campos correctamente.';
                errorElement.className = 'error-message';
            } else {
                errorElement.textContent = '';
            }
        });

        formElement.addEventListener('input', () => {
            if (formElement.checkValidity()) {
                errorElement.textContent = '';
            }
        });
    });

    // Validación en tiempo real para cada campo de entrada
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        const errorSpan = document.getElementById(`error${input.id.charAt(0).toUpperCase() + input.id.slice(1)}`);
        input.addEventListener('input', () => {
            if (!input.checkValidity()) {
                switch (input.id) {
                    case 'idEstudiante':
                    case 'idEliminar':
                    case 'idMatricular':
                    case 'idDesmatricular':
                    case 'idCalificacion':
                        errorSpan.textContent = 'El ID debe contener solo números.';
                        break;
                    case 'nombreEstudiante':
                    case 'provincia':
                    case 'localidad':
                        errorSpan.textContent = 'El nombre debe contener solo letras y espacios.';
                        break;
                    case 'edadEstudiante':
                        errorSpan.textContent = 'La edad debe ser un número entre 1 y 120.';
                        break;
                    case 'calle':
                        errorSpan.textContent = 'La calle debe contener solo letras y espacios.';
                        break;
                    case 'numero':
                        errorSpan.textContent = 'El número debe contener solo números.';
                        break;
                    case 'piso':
                        errorSpan.textContent = 'El piso debe contener solo números.';
                        break;
                    case 'codigoPostal':
                        errorSpan.textContent = 'El código postal debe contener 5 números.';
                        break;
                    case 'nombreAsignatura':
                    case 'nombreEliminar':
                    case 'nombreMatricular':
                    case 'nombreDesmatricular':
                    case 'nombreCalificacion':
                        errorSpan.textContent = 'El nombre de la asignatura debe contener solo letras, números romanos y espacios.';
                        break;
                    case 'calificacion':
                        errorSpan.textContent = 'La calificación debe ser un número entre 0 y 10.';
                        break;
                    default:
                        errorSpan.textContent = input.validationMessage;
                }
            } else {
                errorSpan.textContent = '';
            }
        });
    });
});

// Eventos de la interfaz
document.getElementById('agregarEstudiante').addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('idEstudiante').value;
    const nombre = document.getElementById('nombreEstudiante').value;
    const edad = document.getElementById('edadEstudiante').value;
    const calle = document.getElementById('calle').value;
    const numero = document.getElementById('numero').value;
    const piso = document.getElementById('piso').value;
    const codigoPostal = document.getElementById('codigoPostal').value;
    const provincia = document.getElementById('provincia').value;
    const localidad = document.getElementById('localidad').value;

    if (!id || !nombre || !edad || !calle || !numero || !codigoPostal || !provincia || !localidad) {
        mostrarMensaje('errorAgregarEstudiante', 'Por favor, complete todos los campos.', 'error-message');
        return;
    }

    // Validar que el ID solo contenga números
    if (!/^\d+$/.test(id)) {
        mostrarMensaje('errorAgregarEstudiante', 'El ID debe contener solo números.', 'error-message');
        return;
    }

    // Validar que el nombre solo contenga letras y espacios
    if (!/^[A-Za-z\s]+$/.test(nombre)) {
        mostrarMensaje('errorAgregarEstudiante', 'El nombre debe contener solo letras y espacios.', 'error-message');
        return;
    }

    // Validar que la edad sea un número positivo
    if (isNaN(edad) || edad <= 0 || edad > 120) {
        mostrarMensaje('errorAgregarEstudiante', 'La edad debe ser un número entre 1 y 120.', 'error-message');
        return;
    }

    // Validar que la calle solo contenga letras y espacios
    if (!/^[A-Za-z\s]+$/.test(calle)) {
        mostrarMensaje('errorAgregarEstudiante', 'La calle debe contener solo letras y espacios.', 'error-message');
        return;
    }

    // Validar que el número solo contenga números
    if (!/^\d+$/.test(numero)) {
        mostrarMensaje('errorAgregarEstudiante', 'El número debe contener solo números.', 'error-message');
        return;
    }

    // Validar que el piso solo contenga números (opcional)
    if (piso && !/^\d*$/.test(piso)) {
        mostrarMensaje('errorAgregarEstudiante', 'El piso debe contener solo números.', 'error-message');
        return;
    }

    // Validar que el código postal solo contenga 5 números
    if (!/^\d{5}$/.test(codigoPostal)) {
        mostrarMensaje('errorAgregarEstudiante', 'El código postal debe contener 5 números.', 'error-message');
        return;
    }

    // Validar que la provincia solo contenga letras y espacios
    if (!/^[A-Za-z\s]+$/.test(provincia)) {
        mostrarMensaje('errorAgregarEstudiante', 'La provincia debe contener solo letras y espacios.', 'error-message');
        return;
    }

    // Validar que la localidad solo contenga letras y espacios
    if (!/^[A-Za-z\s]+$/.test(localidad)) {
        mostrarMensaje('errorAgregarEstudiante', 'La localidad debe contener solo letras y espacios.', 'error-message');
        return;
    }

    try {
        const direccion = new Direccion(calle, numero, piso, codigoPostal, provincia, localidad);
        const estudiante = new Estudiante(id, nombre, edad, direccion);
        sistema.agregarEstudiante(estudiante);
        guardarEnLocalStorage();
        mostrarMensaje('errorAgregarEstudiante', 'Estudiante agregado correctamente', 'success-message');
    } catch (error) {
        mostrarMensaje('errorAgregarEstudiante', 'Error al agregar estudiante: ' + error.message, 'error-message');
    }
});

document.getElementById('eliminarEstudiante').addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('idEliminar').value;

    if (!id) {
        mostrarMensaje('errorEliminarEstudiante', 'Por favor, complete todos los campos.', 'error-message');
        return;
    }

    // Validar que el ID solo contenga números
    if (!/^\d+$/.test(id)) {
        mostrarMensaje('errorEliminarEstudiante', 'El ID debe contener solo números.', 'error-message');
        return;
    }

    try {
        const estudiantes = sistema.obtenerEstudiantes();
        if (!estudiantes[id]) {
            mostrarMensaje('errorEliminarEstudiante', 'El estudiante con ID ' + id + ' no existe.', 'error-message');
            return;
        }
        sistema.eliminarEstudiante(id);
        guardarEnLocalStorage();
        mostrarMensaje('errorEliminarEstudiante', 'Estudiante eliminado correctamente', 'success-message');
    } catch (error) {
        mostrarMensaje('errorEliminarEstudiante', 'Error al eliminar estudiante: ' + error.message, 'error-message');
    }
});

document.getElementById('agregarAsignatura').addEventListener('click', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombreAsignatura').value;

    if (!nombre) {
        mostrarMensaje('errorAgregarAsignatura', 'Por favor, complete todos los campos.', 'error-message');
        return;
    }

    // Validar que el nombre de la asignatura solo contenga letras, números y espacios
    if (!/^[A-Za-z0-9IVXivx\s]+$/.test(nombre)) {
        mostrarMensaje('errorAgregarAsignatura', 'El nombre de la asignatura debe contener solo letras, números y espacios.', 'error-message');
        return;
    }

    try {
        const asignatura = new Asignatura(nombre);
        sistema.agregarAsignatura(asignatura);
        guardarEnLocalStorage();
        mostrarMensaje('errorAgregarAsignatura', 'Asignatura agregada correctamente', 'success-message');
    } catch (error) {
        mostrarMensaje('errorAgregarAsignatura', 'Error al agregar asignatura: ' + error.message, 'error-message');
    }
});

document.getElementById('eliminarAsignatura').addEventListener('click', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombreEliminar').value;

    if (!nombre) {
        mostrarMensaje('errorEliminarAsignatura', 'Por favor, complete todos los campos.', 'error-message');
        return;
    }

    // Validar que el nombre de la asignatura solo contenga letras, números y espacios
    if (!/^[A-Za-z0-9IVXivx\s]+$/.test(nombre)) {
        mostrarMensaje('errorEliminarAsignatura', 'El nombre de la asignatura debe contener solo letras, números y espacios.', 'error-message');
        return;
    }

    try {
        const asignaturas = sistema.obtenerAsignaturas();
        if (!asignaturas[nombre]) {
            mostrarMensaje('errorEliminarAsignatura', 'La asignatura ' + nombre + ' no existe.', 'error-message');
            return;
        }
        sistema.eliminarAsignatura(nombre);
        guardarEnLocalStorage();
        mostrarMensaje('errorEliminarAsignatura', 'Asignatura eliminada correctamente', 'success-message');
    } catch (error) {
        mostrarMensaje('errorEliminarAsignatura', 'Error al eliminar asignatura: ' + error.message, 'error-message');
    }
});

document.getElementById('matricularEstudiante').addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('idMatricular').value;
    const nombreAsignatura = document.getElementById('nombreMatricular').value;

    if (!id || !nombreAsignatura) {
        mostrarMensaje('errorMatricularEstudiante', 'Por favor, complete todos los campos.', 'error-message');
        return;
    }

    // Validar que el ID solo contenga números
    if (!/^\d+$/.test(id)) {
        mostrarMensaje('errorMatricularEstudiante', 'El ID debe contener solo números.', 'error-message');
        return;
    }

    // Validar que el nombre de la asignatura solo contenga letras, números y espacios
    if (!/^[A-Za-z0-9IVXivx\s]+$/.test(nombreAsignatura)) {
        mostrarMensaje('errorMatricularEstudiante', 'El nombre de la asignatura debe contener solo letras, números y espacios.', 'error-message');
        return;
    }

    try {
        const estudiantes = sistema.obtenerEstudiantes();
        const asignaturas = sistema.obtenerAsignaturas();
        const estudiante = estudiantes[id];
        const asignatura = asignaturas[nombreAsignatura];

        if (!estudiante) {
            mostrarMensaje('errorMatricularEstudiante', 'El estudiante con ID ' + id + ' no existe.', 'error-message');
            return;
        }

        if (!asignatura) {
            mostrarMensaje('errorMatricularEstudiante', 'La asignatura ' + nombreAsignatura + ' no existe.', 'error-message');
            return;
        }

        estudiante.matricularAsignatura(asignatura);
        guardarEnLocalStorage();
        mostrarMensaje('errorMatricularEstudiante', 'Estudiante matriculado correctamente', 'success-message');
    } catch (error) {
        mostrarMensaje('errorMatricularEstudiante', 'Error al matricular estudiante: ' + error.message, 'error-message');
    }
});

document.getElementById('desmatricularEstudiante').addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('idDesmatricular').value;
    const nombreAsignatura = document.getElementById('nombreDesmatricular').value;

    if (!id || !nombreAsignatura) {
        mostrarMensaje('errorDesmatricularEstudiante', 'Por favor, complete todos los campos.', 'error-message');
        return;
    }

    // Validar que el ID solo contenga números
    if (!/^\d+$/.test(id)) {
        mostrarMensaje('errorDesmatricularEstudiante', 'El ID debe contener solo números.', 'error-message');
        return;
    }

    // Validar que el nombre de la asignatura solo contenga letras, números y espacios
    if (!/^[A-Za-z0-9IVXivx\s]+$/.test(nombreAsignatura)) {
        mostrarMensaje('errorDesmatricularEstudiante', 'El nombre de la asignatura debe contener solo letras, números y espacios.', 'error-message');
        return;
    }

    try {
        const estudiantes = sistema.obtenerEstudiantes();
        const asignaturas = sistema.obtenerAsignaturas();
        const estudiante = estudiantes[id];
        const asignatura = asignaturas[nombreAsignatura];

        if (!estudiante) {
            mostrarMensaje('errorDesmatricularEstudiante', 'El estudiante con ID ' + id + ' no existe.', 'error-message');
            return;
        }

        if (!asignatura) {
            mostrarMensaje('errorDesmatricularEstudiante', 'La asignatura ' + nombreAsignatura + ' no existe.', 'error-message');
            return;
        }

        estudiante.desmatricularAsignatura(asignatura);
        guardarEnLocalStorage();
        mostrarMensaje('errorDesmatricularEstudiante', 'Estudiante desmatriculado correctamente', 'success-message');
    } catch (error) {
        mostrarMensaje('errorDesmatricularEstudiante', 'Error al desmatricular estudiante: ' + error.message, 'error-message');
    }
});

document.getElementById('agregarCalificacion').addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('idCalificacion').value;
    const nombreAsignatura = document.getElementById('nombreCalificacion').value;
    const calificacion = document.getElementById('calificacion').value;

    if (!id || !nombreAsignatura || !calificacion) {
        mostrarMensaje('errorAsignarCalificacion', 'Por favor, complete todos los campos.', 'error-message');
        return;
    }

    // Validar que el ID solo contenga números
    if (!/^\d+$/.test(id)) {
        mostrarMensaje('errorAsignarCalificacion', 'El ID debe contener solo números.', 'error-message');
        return;
    }

    // Validar que el nombre de la asignatura solo contenga letras, números y espacios
    if (!/^[A-Za-z0-9IVXivx\s]+$/.test(nombreAsignatura)) {
        mostrarMensaje('errorAsignarCalificacion', 'El nombre de la asignatura debe contener solo letras, números y espacios.', 'error-message');
        return;
    }

    // Validar que la calificación sea un número entre 0 y 10
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        mostrarMensaje('errorAsignarCalificacion', 'La calificación debe ser un número entre 0 y 10.', 'error-message');
        return;
    }

    try {
        const estudiantes = sistema.obtenerEstudiantes();
        const asignaturas = sistema.obtenerAsignaturas();
        const estudiante = estudiantes[id];
        const asignatura = asignaturas[nombreAsignatura];

        if (!estudiante) {
            mostrarMensaje('errorAsignarCalificacion', 'El estudiante con ID ' + id + ' no existe.', 'error-message');
            return;
        }

        if (!asignatura) {
            mostrarMensaje('errorAsignarCalificacion', 'La asignatura ' + nombreAsignatura + ' no existe.', 'error-message');
            return;
        }

        estudiante.agregarCalificacion(asignatura, calificacion);
        guardarEnLocalStorage();
        mostrarMensaje('errorAsignarCalificacion', 'Calificación agregada correctamente', 'success-message');
    } catch (error) {
        mostrarMensaje('errorAsignarCalificacion', 'Error al agregar calificación: ' + error.message, 'error-message');
    }
});

document.getElementById('reporteEstudiantes').addEventListener('click', (event) => {
    event.preventDefault();
    try {
        const reporteHTML = sistema.reporteEstudiantes();
        document.getElementById('reporteContainer').innerHTML = reporteHTML;
        mostrarMensaje('errorReporteEstudiantes', 'Reporte generado correctamente', 'success-message');
    } catch (error) {
        mostrarMensaje('errorReporteEstudiantes', 'Error al generar reporte: ' + error.message, 'error-message');
    }
});

document.getElementById('promedioGeneral').addEventListener('click', (event) => {
    event.preventDefault();
    try {
        const promedio = sistema.promedioGeneral().toFixed(2);
        alert('Promedio general de todos los estudiantes: ' + promedio);
        mostrarMensaje('errorPromedioGeneral', 'Promedio calculado correctamente', 'success-message');
    } catch (error) {
        mostrarMensaje('errorPromedioGeneral', 'Error al calcular promedio: ' + error.message, 'error-message');
    }
});