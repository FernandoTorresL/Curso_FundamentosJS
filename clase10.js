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

function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad > 17)
        console.log('Sacha es mayor de edad')
    else
        console.log('Sacha aún es menor de edad')
}   

imprimirSiEsMayorDeEdad(sacha)
