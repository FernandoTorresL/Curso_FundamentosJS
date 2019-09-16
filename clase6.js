var fer = {
    nombre: 'FerT',
    apellido: 'Torres',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 22
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(fer)
imprimirNombreEnMayusculas(dario)
