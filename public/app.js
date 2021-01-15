
const openweatherKey = 'd766fef235784f384b36dd2bc1f6d9b1'
//http://api.openweathermap.org/data/2.5/weather?lat=35.8254&lon=10.6370&appid=d766fef235784f384b36dd2bc1f6d9b1
const weatherIcons = {
    'Rain': "wi wi-day-rain",
    'Clouds': "wi wi-day-cloudy",
    'Clear': "wi wi-day-sunny",
    'Snow': "wi wi-day-snow",
    'mist': "wi wi-day-fog",
    'Drizzle': "wi wi-day-sleet",
}
/** IL FAUT :
  1 savoir l'addresse IP de visiteur
  2 contacter une API pour savoir la localisation de l'utilisateur
  3 renvoyé la méteo
 */



async function getMeteoInfos() {
    //savoir l'addresse IP de visiteur
    // const ip = await fetch("http://api.ipify.org/?format=json").then(result => result.json())
    //     .then(data => data.ip)
    //     .catch(error => console.log(error))


    const currentCity = await fetch(`http://ipinfo.io/?token=9218caedcca17b`)
        .then(result => result.json())
        .then(data => {
            return { city: data.city, loc: data.loc } // on retourne un obj au lieu d'un item
        })
        .catch(error => console.log(error))

    // console.log(currentCity.city)

    // console.log(currentCity.loc)
    const commaPosition = currentCity.loc.indexOf(',')  // position de , dans la chaine
    const lon = currentCity.loc.substring(0, commaPosition)
    const lat = currentCity.loc.substring(commaPosition+1, currentCity.loc.length )
    // console.log(commaPosition)
    console.log('current city local:', currentCity.loc)
    console.log('lon ' + lon)
    console.log('lat ' + lat)
    const openweatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=${openweatherKey}&lang=fr&units=metric`
    // console.log(openweatherURL)

    const weather = await fetch(openweatherURL)
        .then(result => result.json())
        .then(data => {
            return {
                description: data.weather[0].description,
                main: data.weather[0].main,
                temp: data.main.temp,
                city: data.name,
                meteo: {
                    data
                }

            }
        })
        .catch(error => console.log(error))
        displayMeteoInfos(weather)
}

let displayMeteoInfos = (meteo) => {
    // if (!(meteo instanceof Object)) throw 'Param must be an Object';
    document.querySelector('#city').textContent= meteo.city
    document.querySelector('#temperature').textContent= meteo.temp
    document.querySelector('#description').textContent= meteo.description
    document.querySelector('i.wi').className = weatherIcons[meteo.main]
    console.log( meteo.meteo)


}

let city = document.querySelector('#city')

city.addEventListener('click', (e) => {

    city.contentEditable = true

})

city.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault()
        city.contentEditable = false
    }

})

 getMeteoInfos()

// displayMeteoInfos(infos)
// displayMeteoInfos()