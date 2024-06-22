let nombre = 'Diego'
let apellido = 'Beltran'
let nombreUsuario = 'diegobeartran'
let edad = 31
let correoElectronico = 'cdbdiegobeltran@gmail.com'
let mayorDeEdad = true
let dineroAhorrado = 10000000
let deudas = 14000000

const nombreCompleto = nombre + ' ' + apellido;
const dineroReal = dineroAhorrado - deudas

console.log(`Hola, mi nombre es ${nombreCompleto} y mi patrimonio es de $${dineroReal}`)

function informacion(completeName, nickName) {
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickName}`)
}

informacion(nombreCompleto, nombreUsuario)

const tipoDeSuscripcion = 'Basic'

function identificarSuscripcion(suscripcion) {
    if (suscripcion === 'Free') {
        return("Solo puedes tomar los cursos gratis");
    } 
    if (suscripcion === 'Basic') {
        return("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } 
    if (suscripcion === 'Expert') {
        return("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    if (suscripcion === 'ExpertPlus') {
        return("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
    console.warn('Ese tipo de suscripción no existe')
}

console.log(identificarSuscripcion(tipoDeSuscripcion))

const suscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}

function identificacionSuscripcion(suscripcion) {
    if(suscripciones[suscripcion]) {
        return suscripciones[suscripcion]
    }
    console.warn('Ese tipo de suscripción no existe')
}

console.log(identificacionSuscripcion('expert'))

let i = 0
while (i < 5) {
    console.log('El valor de i es: ' + i);
    i++;
}
i = 10
while (i >= 2) {
    console.log('El valor de i es: ' + i);
    i--;
}

const numeros = [5, 10, 15, 20, 25]

function imprimirArray(array) {
    console.log(array[0])
    array.forEach(item => console.log(item))
}

imprimirArray(numeros)

const objeto = {
    nombre: 'Diego',
    edad: 31,
    email: 'cdbdiegobeltran@gmail.com'
}

function imprimirObjeto(objeto) {
    return Object.entries (objeto).forEach(item => console.log(item))
}
// imprimirObjeto(objeto)

// Solución profesor:

function impresionObjeto(objeto) {
    return Object.values(objeto)
}

impresionObjeto(objeto)

imprimirArray(arrayObjeto)