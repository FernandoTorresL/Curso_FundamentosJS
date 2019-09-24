const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

const onPeopleResponse = function (person) {
    console.log(`Hola, yo soy ${person.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
    console.log(arguments)
}

for(var i = 1; i < 2; i++) {
    obtenerPersonaje(i)
}
