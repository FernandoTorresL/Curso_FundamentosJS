var fer = {
    nombre: 'Fernando',
    apellido: 'Torres',
    altura: 1.60,
    cantidadDeLibros: 24
}

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Pérez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gómez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juárez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [ sacha, alan, martin, dario, vicky, paula ]

// Obteniendo el total de libros con ciclo for
/* var acum = 0

for (var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros
}

console.log(`En total todos tienen ${acum} libros`) */

// Obteniendo el total de libros con función reduce
// Reescribiendo Arrow function
const reducer = (acum, { cantidadDeLibros }) => 
    acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`Usando Reduce:En total todos tienen ${totalDeLibros} libros`)
