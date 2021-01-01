var fer = {
    nombre: 'Fernando',
    apellido: 'Torres',
    edad: 40,
    peso: 88
}

console.log(`Al inicio del año ${fer.nombre} pesa ${fer.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = fer.peso - 3
var dias = 0

while (fer.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(fer)
    }
    if (realizaDeporte()) {
        adelgazar(fer)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${fer.nombre} adelgazó y pesa ${fer.peso.toFixed(1)}kg`)
