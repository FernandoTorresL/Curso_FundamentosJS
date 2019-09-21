// Prototipo de Persona
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. ${this.soyAlto()}`)
}

Persona.prototype.soyAlto = function () {
    if (this.altura > 1.8) 
        msg = 'Soy una persona alta!'
    else
        msg = 'Soy una persona baja!'

    return msg
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.9)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Persona('Arturo', 'Martínez', 1.8)

sacha.saludar()
erika.saludar()
arturo.saludar()
