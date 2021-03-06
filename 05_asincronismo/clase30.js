const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name} | ${persona.url}`)

        if (callback) {
            callback()
        }
    })
}

obtenerPersonaje(10, function () {
    obtenerPersonaje(11, function () {
        obtenerPersonaje(12, function () {
            obtenerPersonaje(13)
        })
    })
})
