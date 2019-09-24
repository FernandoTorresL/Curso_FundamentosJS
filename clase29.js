const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

const onPeopleResponse = function (person) {
    console.log(`Hola, yo soy ${person.name} | ${person.url}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

for(var i = 1; i < 100; i++) {
    obtenerPersonaje(i)
}
