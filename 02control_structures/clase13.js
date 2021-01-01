var fer = {
    nombre: 'Fernando',
    apellido: 'Torres',
    edad: 40,
    peso: 88
}

console.log(`Al inicio del año ${fer.nombre} pesa ${fer.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(fer)
    } else if (random < 0.5) {
        adelgazar(fer)
    }

}

console.log(`Al final del año ${fer.nombre} pesa ${fer.peso.toFixed(1)}kg`)