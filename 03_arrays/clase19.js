var fer = {
    nombre: 'Fernando',
    apellido: 'Torres',
    altura: 1.60
}

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Pérez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gómez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juárez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura <= 1.8


// persona.altura = persona.altura * 100
// Reescribiendo Arrow Function:
const pasarAlturaCms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personas = [ sacha, alan, martin, dario, vicky, paula ]

var personasCms = personas.map(pasarAlturaCms)

console.log("Altura en Cms:")
console.log(personasCms)
