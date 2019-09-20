class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido}.`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        // Lo anterior es equivalente a 
        var { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador(a).`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido} y soy Desarrollador(a).`)
    if (esDev) {
        console.log (`Ah mirá, no sabía que eras desarrollador/a`)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.9)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Desarrollador('Arturo', 'Martínez', 1.8)

sacha.saludar(responderSaludo)
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
