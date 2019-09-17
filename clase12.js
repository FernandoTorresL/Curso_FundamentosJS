var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 18,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gómez',
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    
    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.dj) {
        console.log('DJ')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')
    }

    if (persona.drone) {
        console.log('Piloto de Drone')
    }
    
}

imprimirProfesiones(sacha)


const MAYORIA_DE_EDAD = 18

/* const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} */

const esMayorDeEdad = persona => {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona))
        console.log(`${persona.nombre} es mayor de edad`)
    else
        console.log(`${persona.nombre} es aún menor de edad`)
}   

imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMayorDeEdad(juan)
