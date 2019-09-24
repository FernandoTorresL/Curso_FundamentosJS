const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
        .get(url, opts, callback)
        .fail(() => {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
        })
}

obtenerPersonaje(15, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name} | ${personaje.url}`)

    obtenerPersonaje(16, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name} | ${personaje.url}`)

        obtenerPersonaje(17, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name} | ${personaje.url}`)

            obtenerPersonaje(13, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name} | ${personaje.url}`)
            })
        })
    })
})
