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

// Reescribiendo la arrow function v2
const esAlta = ({ altura }) => altura > 1.8

var personas = [ sacha, alan, martin, dario, vicky, paula ]

// Ésta versión del filtro es preferible. Se puede leer, entender mejor.
 var personasAltas = personas.filter(esAlta)

// Reescribiendo el filtro de arriba
/* var personasAltas = personas.filter(function (persona) {
    return persona.altura > 1.8
}) */

console.log(personasAltas)
