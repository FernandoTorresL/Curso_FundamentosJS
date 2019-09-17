var signo =  prompt('¿Cuál es tu signo?')

switch (signo.toLowerCase()) {
    case 'aries': 
        console.log('Deje de dar vueltas y encuentre las soluciones precisas a los inconvenientes financieros. Relájese, ya que el resto de los problemas se irán arreglando solos.')
        break
    case 'tauro': 
        console.log('Será una jornada donde no sabrá cómo manejar una situación en la que tendrá que elegir entre dos caminos diferentes. Seguramente, estará un tanto confundido.')
        break
    case 'geminis':
    case 'géminis': 
        console.log('Proyéctese a resolver sobre la marcha todas las situaciones nuevas. Sepa que los logros futuros dependerán de su actual creatividad e inteligencia.')
        break
    case 'cancer':
    case 'cáncer':
        console.log('Momento para que asimile que los cambios siempre conducen a un nuevo aprendizaje. Será una etapa para generar una transformación total en su vida.')
    break
    case 'leo': 
        console.log('Debería ser consciente y no postergar para mañana todo lo que pueda hacer hoy. No se altere, ya que cumplirá con todas las metas que se ha propuesto.')
        break
    case 'virgo': 
        console.log('No dude y confíe en sus amigos. Sepa que ellos sabrán ayudarlo en su futuro y lo apoyarán en todo lo que necesite en su vida. Déjese guiar por ellos.')
        break
    case 'libra': 
        console.log('Prepárese, ya que será el momento oportuno para que abandone las ideas pesimistas. Recuerde que en otras oportunidades pudo superar situaciones peores.')
        break
    case 'escorpio': 
        console.log('Posiblemente, será una jornada excesiva de preocupaciones y responsabilidades. Sepa que tendrá que confrontar de a un tema a la vez y logrará obtener buenos resultados.')
        break
    case 'sagitario': 
        console.log('En estos momentos, le será conveniente que mantenga el equilibrio ante las situaciones que enfrente, ya que las emociones estarán desordenadas.')
        break
    case 'capricornio': 
        console.log('Sería bueno que no se retire y siga adelante con todos los proyectos que tiene en su cabeza. No permita que sus curiosidades inoportunas lo detengan en su avance.')
        break
    case 'acuario': 
        console.log('Probablemente se sentirá relajado, ya que se ha librado de viejas ataduras y dependencias que siempre lo limitaban cuando debía tomar una determinación.')
        break
    case 'piscis':
        console.log('Procure no negarse al triunfo, ya que podrían retrasarse o no fluir las cosas como esperaba y se había propuesto desde un principio. Déjese fluir.')
        break
    default:
        console.log('No es un signo zodiacal válido')
        break
}
