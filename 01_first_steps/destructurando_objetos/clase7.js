var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreyEdad(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona

    console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años.`)
}

console.log('Impresión de resultados del reto en clase Destructurar objetos:')
imprimirNombreyEdad(sacha)
imprimirNombreyEdad(dario)
