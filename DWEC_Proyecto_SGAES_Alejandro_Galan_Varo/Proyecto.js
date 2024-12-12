/*
Enlace al repositorio de GitHub: https://github.com/alexgv512/DWEC_Alejandro_Galan_Varo
*/ 

class Direccion {
    #calle;
    #numero;
    #piso;
    #codigoPostal;
    #provincia;
    #localidad;

    
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
//Getters de la clase Direccion
    get calle() {
        return this.#calle;
    }

    get numero() {
        return this.#numero;
    }

    get piso() {
        return this.#piso;
    }

    get codigoPostal() {
        return this.#codigoPostal;
    }

    get provincia() {
        return this.#provincia;
    }

    get localidad() {
        return this.#localidad;
    }

    toString() {
        return this.#calle + ", " + this.#numero + ", " + this.#piso + ", " + this.#codigoPostal + ", " + this.#provincia + ", " + this.#localidad;
    }
}

class Persona {
    #id;
    #nombre;
    #edad;
    #direccion; 
    constructor(id, nombre, edad, direccion) {// Constructor de la clase Persona
        
        if (/^[a-zA-Z\s]+$/.test(nombre)) {// compruebo si el nombre es valido
            this.#nombre = nombre;
        }
        else {
           throw new Error("El nombre debe contener solo letras y espacios.");
        }

        this.#id = id;
        this.#edad = edad;
        this.#direccion = direccion;
    }
//Getters de la clase Persona
    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get direccion() {
        return this.#direccion.toString();
    }
//Setters de la clase Persona
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    set edad(edad) {
        this.#edad = edad;
    }

    set direccion(direccion) {
        this.#direccion = direccion;
    }
}

class Estudiante extends Persona {
    #asignaturas;
    
    constructor(id, nombre, edad, direccion) {// Constructor de la clase Estudiante
        super(id, nombre, edad, direccion);
        this.#asignaturas = [];//asignaturas del estudiante, clave: nombre de la asignatura, valor: calificaciones 
    }
    //Getters de la clase Estudiante    
    get asignatura(){
        return this.#asignaturas
    }

    
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

    //hacer el promedio de las notas de cada alumno 

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
  

class Asignatura {
    #nombre;
    #estudiantes;

    constructor(nombre) {// Constructor de la clase Asignatura
        
        if (!/^[a-zA-Z\sIVXLCDM]+$/.test(nombre)) {// Compruebo si el nombre de la asignatura es valido
            throw new Error("El nombre de la asignatura debe contener solo letras, números romanos y espacios.");
        }

    
        this.#nombre = nombre;
        this.#estudiantes = [];//estudantes de la asignatura clave: id del estudiante, valor: objeto Estudiante
    }
//Getters de la clase Asignatura
    get nombre() {
        return this.#nombre;
    }
    get estudiantes(){
        return this.#estudiantes;
    }

    promedio() {// Promedio de la calificación de cada estudiante
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

    // metodo tostirg
    toString() {
        return `Asignatura: ${this.#nombre}, Promedio: ${this.promedio().toFixed(2)}`;
    }
}

class SistemaGestionAcademica {
    #estudiantes;
    #asignaturas;
    constructor() {// constructor de la clase
        this.#estudiantes = {};//estudiantes del sistema, clave: id del estudiante, valor: objeto Estudiante
        this.#asignaturas = {};//asignaturas del sistema, clave: nombre de la asignatura, valor: objeto Asignatura
    }

    obtenerEstudiantes() {
        return this.#estudiantes;
    }
    obtenerAsignaturas() {    
        return this.#asignaturas;
    }

    agregarEstudiante(estudiante) { // agregar estudiante
        if (!this.#estudiantes[estudiante.id]) {// si no existe el estudiante
            this.#estudiantes[estudiante.id] = estudiante;// agregarlo
            console.log("Estudiante " + estudiante.nombre + " agregado.");
        } else {
            console.log("Estudiante con este ID ya existe.");
        }
    }

    eliminarEstudiante(idEstudiante) {// eliminar estudiante
        if (this.#estudiantes[idEstudiante]) {// si existe el estudiante
            delete this.#estudiantes[idEstudiante];// lo elimino
            console.log("Estudiante con ID " + idEstudiante + " eliminado.");
        } else {
            console.log("Estudiante no encontrado.");
        }
    }

    agregarAsignatura(asignatura) {// añadir asinatura
        if (!this.#asignaturas[asignatura.nombre]) {// si no existe la asignatura
            this.#asignaturas[asignatura.nombre] = asignatura;// la añado 
            console.log("Asignatura " + asignatura.nombre + " agregada.");
        } else {
            console.log("Asignatura ya existe.");
        }
    }


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

    promedioGeneralMejorado() {
        if (Object.values(this.#estudiantes).length == 0) {// si no hay estudiantes
            return 0;
        }
        let promedio = Object.values(this.#estudiantes).reduce((suma, estudiante) => suma + estudiante.promedio(), 0);// sumo el promedio de todos los estudiantes
        
        return promedio / Object.values(this.#estudiantes).length;// calculo el promedio general

    }

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
    
    //hacer el reporte de los estudiates con sus notas por asignatura y los datos de cada estudiate
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


//prueba basica
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
        opcion = mostrarMenu();
        
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
                sistema.eliminarEstudiante(id);
                break;
            }
            case '3': {
                const nombre = prompt("Introduce el nombre de la asignatura: ");
                const asignatura = new Asignatura(nombre);
                sistema.agregarAsignatura(asignatura);
                break;
            }
            case '4': {
                const nombreAsignatura = prompt("Introduce el nombre de la asignatura a eliminar: ");
                const asignaturas = sistema.obtenerAsignaturas();
            
                if (!asignaturas[nombreAsignatura]) {
                    //console.log(`La asignatura ${nombreAsignatura} no existe en el sistema.`);
                } else {
                    sistema.eliminarAsignatura(nombreAsignatura);
                    //console.log(`Asignatura ${nombreAsignatura} eliminada correctamente.`);
                }
                break;
            }
            case '5': { 
                const id = prompt("Introduce el ID del estudiante: ");
                const nombreAsignatura = prompt("Introduce el nombre de la asignatura: ");

                const estudiantes = sistema.obtenerEstudiantes();
                const asignaturas = sistema.obtenerAsignaturas();

                // Buscar el estudiante y la asignatura en el sistema
                const estudiante = estudiantes[id];
                const asignatura = asignaturas[nombreAsignatura];

                if (!estudiante) { // Verificar si existen tanto el estudiante como la asignatura
                    console.log(`Estudiante con ID ${id} no encontrado.`);
                } else if (!asignatura) {
                    console.log(`Asignatura ${nombreAsignatura} no encontrada.`);
                } else {
                    // Si ambos existen, matricular al estudiante en la asignatura
                    estudiante.matricularAsignatura(asignatura);
                    console.log(`Estudiante con ID ${id} matriculado en ${nombreAsignatura}.`);
                }
                break;
            }
            case '6': {
                const id = prompt("Introduce el ID del estudiante: ");
                const nombreAsignatura = prompt("Introduce el nombre de la asignatura: ");

                const estudiantes = sistema.obtenerEstudiantes();
                const asignaturas = sistema.obtenerAsignaturas();

                const estudiante = estudiantes[id];
                const asignatura = asignaturas[nombreAsignatura];

                if (!estudiante) {
                    console.log(`Estudiante con ID ${id} no encontrado.`);
                } else if (!asignatura) {
                    console.log(`Asignatura ${nombreAsignatura} no encontrada.`);
                } else {
                    // Si ambos existen, desmatriculamos al estudiante de la asignatura
                    estudiante.desmatricularAsignatura(asignatura);
                    console.log(`Estudiante con ID ${id} dematriculado en ${nombreAsignatura}.`);
                }
                break;
             
            }
            case '7': {
                const id = prompt("Introduce el ID del estudiante: ");
                const nombreAsignatura = prompt("Introduce el nombre de la asignatura: ");
                const calificacion = parseFloat(prompt("Introduce la calificación: "));

                const estudiantes = sistema.obtenerEstudiantes();
                const asignaturas = sistema.obtenerAsignaturas();

                const estudiante = estudiantes[id];
                const asignatura = asignaturas[nombreAsignatura];

                if (!estudiante) {
                    console.log(`Estudiante con ID ${id} no encontrado.`);
                } else if (!asignatura) {
                    console.log(`Asignatura ${nombreAsignatura} no encontrada.`);
                } else {
                    // Si ambos existen, agregamos la calificación al estudiante en la asignatura
                    estudiante.agregarCalificacion(asignatura, calificacion);
                    console.log(`Estudiante con ID ${id} se le ha añadido la calificación de ${calificacion} en ${nombreAsignatura}.`);
                }
                break;
            }
            case '8': {
                sistema.reporteEstudiantes();
                break;
            }
            case '9': {
                console.log("Promedio general de todos los estudiantes: " + sistema.promedioGeneral().toFixed(2) );
                break;
            }
            case '10': {
                console.log("Buscar estudiate");
                const patron = prompt("Introduce el patrón de búsqueda del nombre del estudiante: ");
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
                console.log("Opción no válida.");
                break;
        }
    } while (!salir);
