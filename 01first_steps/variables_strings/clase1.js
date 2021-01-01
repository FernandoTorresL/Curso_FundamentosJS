var nombre = 'Fer', apellido = 'Torres'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = nombre.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` 

var str = nombre.substr(1, 2)
var str2 = nombre.substr(nombre.length - 1, 1)

console.log('La última letra de Nombre es: ' + str2)