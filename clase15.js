var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve())

if (contador === 1) 
    var msg = 'vez'
else
    var msg =  'veces'

console.log(`Fui a ver si llovía ${contador} ${msg}`)
