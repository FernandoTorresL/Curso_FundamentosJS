function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

// Prototipo de Persona
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador(a).`)
}

// var sacha = new Persona('Sacha', 'Lifszyc', 1.9)
// var erika = new Persona('Erika', 'Luna', 1.6)
// var arturo = new Persona('Arturo', 'Martínez', 1.8)

// // ¡Todas dan false!!
// sacha.soyAlto()
// erika.soyAlto()
// arturo.soyAlto()
