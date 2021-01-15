const openweatherURL = `api.openweathermap.org/data/2.5/weather?q=London&appid=d766fef235784f384b36dd2bc1f6d9b1`

const weathIcons = {
    'Rain': "wi wi-day-rain",
    'Cloud': "wi wi-day-cloudy",
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
    const ip = await fetch("http://api.ipify.org/?format=json").then(result => result.json())
        .then(data => data.ip)
        .catch(error => console.log(error))


    const currentCity = await fetch(`http://ipinfo.io/${ip}?token=9218caedcca17b`)
        .then(result => result.json())
        .then(data => data.city)
        .catch(error => console.log(error))

    // console.log(ip)
    console.log(currentCity)

}

let displayMeteoInfos = (meteo) => {
    if (!(meteo instanceof Object)) throw 'Param must be an Object';

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

let infos = getMeteoInfos()

// displayMeteoInfos()