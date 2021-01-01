class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador(a).`)
    }
}

// var sacha = new Persona('Sacha', 'Lifszyc', 1.9)
// var erika = new Persona('Erika', 'Luna', 1.6)
// var arturo = new Persona('Arturo', 'Martínez', 1.8)

// // ¡Todas dan false!!
// sacha.soyAlto()
// erika.soyAlto()
// arturo.soyAlto()
