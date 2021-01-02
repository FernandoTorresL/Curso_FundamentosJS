// Prototipo de Persona
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
}

Persona.prototype.soyAlto = () => {
    debugger
    return this.altura > 1.8
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.9)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Persona('Arturo', 'Martínez', 1.8)

// ¡Todas dan false!! Esto ocurre por usar arrow functions: this === windows
sacha.soyAlto()
erika.soyAlto()
arturo.soyAlto()
