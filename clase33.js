const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
        }
    )
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(15)
    .then(personaje15 => {
        console.log(`El personaje 15 es ${personaje15.name} | ${personaje15.url}`)
        return obtenerPersonaje(16)
    })
    .then(personaje16 => {
        console.log(`El personaje 16 es ${personaje16.name} | ${personaje16.url}`)
        return obtenerPersonaje(17)
    })
    .then(personaje17 => {
        console.log(`El personaje 17 es ${personaje17.name} | ${personaje17.url}`)
    })
    .catch(onError)
